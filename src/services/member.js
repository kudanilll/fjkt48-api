import MemberModel from "../models/member.js";
import clientPromise from "../lib/mongodb.js";

export default class MemberService {
  static async getAllMembers() {
    const client = await clientPromise;
    const data = await client
      .db("profile")
      .collection("member")
      .find({})
      .sort({ _id: 1 })
      .toArray();
    if (!data || data.length === 0) return null;
    return data.map((member) => new MemberModel(member).toObject());
  }

  // Mendapatkan member berdasarkan nama
  static async getMemberById(id) {
    const client = await clientPromise;
    const data = await client
      .db("profile")
      .collection("member")
      .findOne({ _id: id });
    if (!data) return null;
    return new MemberModel(data).toObject();
  }
}
