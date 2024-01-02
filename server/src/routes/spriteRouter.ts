import { Router } from "express";
import spriteController from "../controllers/spriteController.js";

const router: Router = Router();

router.post("/", spriteController.postNewSprite);
router.get("/", spriteController.getAllSprites);
router.get("/:id", spriteController.getSpriteById);

export default router;
