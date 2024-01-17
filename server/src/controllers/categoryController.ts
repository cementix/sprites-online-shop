import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CategoryController {
  async postNewCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const category = await prisma.category.create({
        data: {
          name: name,
        },
      });
      res.json(category);
    } catch (e) {
      next(ApiError.badRequest("Category create error!"));
    }
  }
  async getAllCategories(req: Request, res: Response) {
    const categories = await prisma.category.findMany();
    res.json(categories);
  }
  async getCategoryById(req: Request, res: Response) {
    const { id } = req.body;
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    res.json(category);
  }
}

export default new CategoryController();
