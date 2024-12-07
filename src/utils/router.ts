import { Request, Response, Router } from "express";
import MemberController from "../controllers/member";
import UserController from "../controllers/user";
import secure from "../middleware/secure";

const router = Router();

// main routes
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "FJKT48 API",
  });
});
router.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

router.get("/api/v1/member", secure, MemberController.getAllMembers);
router.get("/api/v1/user", secure, UserController.getAllUsers);

export default router;
