import { Router, Request, Response } from "express";
import userController from "../controllers/userController.js";
import { check } from "express-validator";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router: Router = Router();

router.post(
  "/registration",
  [
    check("email", "Email cant be empty").notEmpty(),
    check("password", "Password has to be from 4 to 24 symbols").isLength({
      min: 4,
      max: 24,
    }),
  ],
  userController.registration
);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

export default router;
