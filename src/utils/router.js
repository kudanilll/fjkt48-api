import { Router } from "express";
import secure from "../middleware/secure.js";
import BannerController from "../controllers/banner.js";
import MemberController from "../controllers/member.js";
import UserController from "../controllers/user.js";
import AuthController from "../controllers/auth.js";
import TraineeController from "../controllers/trainee.js";

const router = Router();

// main routes
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FJKT48 API",
  });
});
router.get("/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

// authentication
// router.post("/api/auth/login", secure, UserController.login);
router.post("/api/auth/register", secure, AuthController.register);
// router.post("/api/auth/verify", secure, UserController.verify);

// banner
router.get("/api/v1/banner/home", secure, BannerController.getAllHomeBanner);
router.get(
  "/api/v1/banner/home/id/:id",
  secure,
  BannerController.getHomeBannerById
);

// member
router.get("/api/v1/member", secure, MemberController.getAllMembers);
router.get("/api/v1/member/id/:id", secure, MemberController.getMemberById);

// trainee
router.get("/api/v1/trainee", secure, TraineeController.getAllTrainee);
router.get("/api/v1/trainee/id/:id", secure, TraineeController.getTraineeById);

// user
router.get("/api/v1/user", secure, UserController.getAllUsers);

export default router;
