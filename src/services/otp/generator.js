import crypto from "crypto";

const OTP_LENGTH = 6;
const OTP_EXPIRY = 10 * 60 * 1000; // 10 menit

export default function generateOTP() {
  const otp = crypto
    .randomInt(100000, 999999)
    .toString()
    .padStart(OTP_LENGTH, "0");
  const expiresAt = Date.now() + OTP_EXPIRY;
  return { otp, expiresAt };
}
