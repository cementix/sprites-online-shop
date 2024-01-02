import { Router } from "express";
const router: Router = Router();
import categoryRouter from "./categoryRouter.js";
import spriteRouter from "./spriteRouter.js";
import userRouter from "./userRouter.js";

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/sprite", spriteRouter);

export default router;
