import config from "../../utils/config.js";
import emailTemplate from "./template.js";
import nodemailer from "nodemailer";

export default async function sendVerificationEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });
  const mailOptions = {
    from: config.email.from,
    to: email,
    subject: "Verifikasi Email",
    html: emailTemplate(otp),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Failed to send verification email\n" + error);
  }
}
