import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";

const router: Router = Router();

router.post(
  "/",
  checkRoleMiddleware("ADMIN"),
  categoryController.postNewCategory
);
router.get("/", categoryController.getAllCategories);
router.get("/find", categoryController.getCategoryById);

export default router;
