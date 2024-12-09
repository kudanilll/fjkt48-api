import { ObjectId } from "mongodb"; // Impor ObjectId dari mongodb

class UserModel {
  constructor({ _id, email, password, name, image, createdAt }) {
    this._id = _id || new ObjectId(); // Jika _id tidak diberikan, buat baru
    this.email = email;
    this.password = password;
    this.name = name;
    this.image = image || null; // Optional, bisa null jika tidak ada
    this.createdAt = createdAt || new Date(); // Jika tidak ada createdAt, set default ke tanggal sekarang
  }

  // Menambahkan fungsi toObject
  toObject() {
    return {
      _id: this._id,
      email: this.email,
      password: this.password,
      name: this.name,
      image: this.image,
      createdAt: this.createdAt,
    };
  }
}

export default UserModel;
