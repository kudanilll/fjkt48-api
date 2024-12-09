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
}
