import BannerService from "../services/banner.js";

export default class BannerController {
  static async getAllHomeBanner(req, res) {
    const banners = await BannerService.getAllHomeBanner();
    if (banners === null) {
      res.status(404).json({
        success: false,
        message: "Home banner not found",
        content: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success fetch all home banner",
        content: banners,
      });
    }
  }

  static async getHomeBannerById(req, res) {
    const { id } = req.params; // Ambil 'id' dari URL params
    try {
      const banner = await BannerService.getHomeBannerById(id);
      if (!banner) {
        return res.status(404).json({
          success: false,
          message: "Id not found: " + id,
          content: [],
        });
      }
      res.status(200).json({
        success: true,
        message: "Success fetch Id: " + id,
        content: banner,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // TODO: implement this function
  // static async addHomeBanner(req, res) {}

  // TODO: implement this function
  // static async deleteHomeBannerById(req, res) {}
}
