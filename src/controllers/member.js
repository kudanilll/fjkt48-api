import MemberService from "../services/member.js";

export default class MemberController {
  static async getAllMembers(req, res) {
    const members = await MemberService.getAllMembers();
    if (members === null) {
      res.status(404).json({
        success: false,
        message: "Members not found",
        content: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success fetch all members",
        content: members,
      });
    }
  }

  // Mengambil member berdasarkan nama
  static async getMemberById(req, res) {
    const { id } = req.params; // Ambil 'id' dari URL params
    // console.log(id);
    try {
      const member = await MemberService.getMemberById(id);
      if (!member) {
        return res.status(404).json({
          success: false,
          message: "Id not found: " + id,
          content: [],
        });
      }
      res.status(200).json({
        success: true,
        message: "Success fetch id: " + id,
        content: member,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
