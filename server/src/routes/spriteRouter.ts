import { Router } from "express";
import spriteController from "../controllers/spriteController.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router: Router = Router();

router.post("/", checkRoleMiddleware("ADMIN"), spriteController.postNewSprite);
router.get("/", spriteController.getAllSprites);
router.get("/:id", spriteController.getSpriteById);

export default router;
