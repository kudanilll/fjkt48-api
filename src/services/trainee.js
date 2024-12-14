import TraineeModel from "../models/trainee.js";
import clientPromise from "../lib/mongodb.js";

export default class TraineeService {
  static async getAllTrainee() {
    const client = await clientPromise;
    const data = await client
      .db("profile")
      .collection("trainee")
      .find({})
      .sort({ _id: 1 })
      .toArray();
    if (!data || data.length === 0) return null;
    return data.map((trainee) => new TraineeModel(trainee).toObject());
  }

  // Mendapatkan trainee berdasarkan nama
  static async getTraineeById(id) {
    const client = await clientPromise;
    const data = await client
      .db("profile")
      .collection("trainee")
      .findOne({ _id: id });
    if (!data) return null;
    return new TraineeModel(data).toObject();
  }
}
