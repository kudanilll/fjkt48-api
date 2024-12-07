import { Request, Response } from "express";
import MemberService from "../services/member";

export default class MemberController {
  static async getAllMembers(req: Request, res: Response) {
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