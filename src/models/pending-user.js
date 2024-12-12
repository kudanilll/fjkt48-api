import { convertToJakartaTime } from "../utils/time.js";

class PendingUserModel {
  constructor({ email, password, name, otp, otpExpiresAt, createdAt }) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.otp = otp;
    this.otpExpiresAt = otpExpiresAt;
    this.createdAt = createdAt || convertToJakartaTime(new Date()); // Jika tidak ada createdAt, set default ke tanggal sekarang
  }

  // Menambahkan fungsi toObject
  toObject() {
    return {
      email: this.email,
      password: this.password,
      name: this.name,
      otp: this.otp,
      otpExpiresAt: this.otpExpiresAt,
      createdAt: this.createdAt,
    };
  }
}

export default PendingUserModel;
