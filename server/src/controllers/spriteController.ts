import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { PrismaClient, Sprite } from "@prisma/client";
import ApiError from "../errors/ApiError.js";
const prisma = new PrismaClient();

class SpriteController {
  async postNewSprite(req: Request, res: Response, next: NextFunction) {
    const { name, price, category } = req.body;
    const { img }: any = req.files;
    let fileName = uuidv4() + ".jpg";
    try {
      const sprite: Sprite = await prisma.sprite.create({
        data: {
          name: name,
          price: parseInt(price),
          categoryId: parseInt(category),
          img: fileName,
        },
      });
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      return res.json(sprite);
    } catch (e) {
      next(ApiError.badRequest("Sprite create error!"));
    }
  }
  async getAllSprites(req: Request, res: Response, next: NextFunction) {
    try {
      let { category, limit, page }: any = req.query;
      page = page || 1;
      limit = limit || 1;
      let offset = page * limit - limit;
      let sprites;
      if (!category) {
        sprites = await prisma.sprite.findMany({});
      } else {
        sprites = await prisma.sprite.findMany({
          where: {
            categoryId: parseInt(category),
          },
        });
      }
      return res.json(sprites);
    } catch (e) {
      next(ApiError.badRequest("Getting sprites error!"));
    }
  }
  async getSpriteById(req: Request, res: Response) {}
}

export default new SpriteController();
