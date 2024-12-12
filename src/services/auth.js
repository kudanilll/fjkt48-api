import { isEmpty, validateEmail } from "../utils/validator.js";
import { calculateTimeDifference } from "../utils/time.js";
import clientPromise from "../lib/mongodb.js";
import generateOTP from "./otp/generator.js";
import sendVerificationEmail from "./otp/sender.js";
import UserModel from "../models/user.js";
import PendingUserModel from "../models/pending-user.js";

export default class AuthService {
  // static async login(email, password, callbackUrl, router) {
  //   const emailValidation = validateEmail(email);
  //   if (!emailValidation.isValid) {
  //     return { error: emailValidation.message };
  //   }
  //   return { success: true };
  // }

  static async register(name, email, password) {
    const userName = isEmpty(name);
    if (userName) {
      return { success: false, message: "'name' form required" };
    }

    const userEmail = isEmpty(email);
    if (userEmail) {
      return { success: false, message: "'email' form required" };
    }

    const userPassword = isEmpty(password);
    if (userPassword) {
      return { success: false, message: "'password' form required" };
    }

    if (password.length < 8) {
      return {
        success: false,
        message: "'password' must be at least 8 characters",
      };
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      return { success: false, message: emailValidation.message };
    }

    const otp = generateOTP();
    const pendingUser = {
      name,
      email,
      password,
    };

    const existingPendingUser = await getPendingUserByEmail(pendingUser.email);
    if (existingPendingUser)
      return {
        success: false,
        message:
          "Emails have been registered since " +
          calculateTimeDifference(existingPendingUser.createdAt),
      };

    const existingUser = await getUserByEmail(pendingUser.email);
    if (existingUser)
      return { success: false, message: "Email already in use" };

    const registrationResult = await createPendingUser(
      new PendingUserModel({
        name,
        email,
        password,
        otp: otp.otp,
        otpExpiresAt: otp.expiresAt,
      })
    );

    if (!registrationResult) {
      return { success: false, message: "Failed to register user" };
    }

    await sendVerificationEmail(email, otp.otp);

    return { success: true, message: "OTP sent successfully" };
  }

  static async verifyOTP(email, otp) {
    const pendingUser = await getPendingUserByEmail(email);
    if (!pendingUser) {
      return { success: false, message: "User not found" };
    }

    const currentTime = new Date();
    if (pendingUser.otpExpires < currentTime) {
      return { success: false, message: "OTP has expired" };
    }

    if (pendingUser.otp !== otp) {
      return { success: false, message: "Invalid OTP" };
    }

    const hashedPassword = await hash(user.password, 12);
    const result = await createUser(
      new UserModel({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        image: user.image,
        createdAt: user.createdAt,
      })
    );

    if (!result) {
      return { success: false, message: "Failed to create user" };
    }

    await deletePendingUserByEmail(email);

    return { success: true, message: "Account verified" };
  }
}

export async function getUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("database");
  const usersCollection = db.collection("users");
  return await usersCollection.findOne({ email });
}

export async function createUser(user) {
  const client = await clientPromise;
  const db = client.db("database");
  const usersCollection = db.collection("users");
  await usersCollection.insertOne(user);
}

export async function updateUser(email, updates) {
  const client = await clientPromise;
  const db = client.db("database");
  const usersCollection = db.collection("users");
  await usersCollection.updateOne({ email }, { $set: updates });
}

export async function deleteUser(email) {
  const client = await clientPromise;
  const db = client.db("database");
  const usersCollection = db.collection("users");
  await usersCollection.deleteOne({ email });
}

export async function createPendingUser(user) {
  const client = await clientPromise;
  const db = client.db("auth");
  const usersCollection = db.collection("pending");
  return await usersCollection.insertOne(user);
}

export async function getPendingUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("auth");
  const usersCollection = db.collection("pending");
  return await usersCollection.findOne({ email });
}

export async function deletePendingUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("auth");
  return await db.collection("pending").deleteOne({ email });
}
