import { Request, Response } from "express";
import UserService from "../services/user";

export default class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    if (users === null) {
      res.status(404).json({
        success: false,
        message: "Users not found",
        content: [],
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success fetch all users",
        content: users,
      });
    }
  }
}
