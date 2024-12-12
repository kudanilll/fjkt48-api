import AuthService from "../services/auth.js";

export default class AuthController {
  static async register(req, res) {
    const { name, email, password } = req.body;
    const result = await AuthService.register(name, email, password);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message,
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully register an account",
    });
  }
}
