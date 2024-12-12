import clientPromise from "../lib/mongodb.js";
import { BannerHomeModel } from "../models/banner.js";

export default class BannerService {
  // Home Banner
  static async getAllHomeBanner() {
    const client = await clientPromise;
    const data = await client
      .db("banner")
      .collection("home")
      .find({})
      .toArray();
    if (!data || data.length === 0) return null;
    return data.map((banner) => new BannerHomeModel(banner).toObject());
  }

  static async getHomeBannerById(id) {
    const client = await clientPromise;
    const data = await client
      .db("banner")
      .collection("home")
      .findOne({ _id: id });
    if (!data) return null;
    return new BannerHomeModel(data).toObject();
  }

  // TODO: implement this function
  // static async addHomeBanner(banner) {}

  // TODO: implement this function
  // static async deleteHomeBannerById(id) {}
}
