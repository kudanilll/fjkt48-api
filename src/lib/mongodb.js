/* eslint-disable no-console */
import { MongoClient, ServerApiVersion } from "mongodb";
import config from "../utils/config.js";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI || config.mongodb.uri;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

async function createTTLIndex(client) {
  try {
    // Buat TTL index (auth/pending)
    const db = client.db("auth");
    const pendingUsersCollection = db.collection("pending");
    await pendingUsersCollection.createIndex(
      { createdAt: 1 },
      { expireAfterSeconds: 600 } // 10 menit
    );
    console.log("TTL index created successfully for 'pending' collection.");
  } catch (error) {
    throw new Error(`Failed to create TTL index: ${error}`);
  }
}

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options).connect();
  }
  clientPromise = global._mongoClient;
  clientPromise
    .then((client) => {
      console.log("MongoDB connected successfully in development mode.");
      createTTLIndex(client);
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
  clientPromise
    .then((client) => {
      console.log("MongoDB connected successfully in production mode.");
      createTTLIndex(client);
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
}

// Export a module-scoped MongoClient promise
export default clientPromise;
