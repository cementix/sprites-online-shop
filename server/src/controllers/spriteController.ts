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
      limit = limit || 10;
      const skip: number = (page - 1) * limit;

      let sprites;

      if (!category) {
        sprites = await prisma.sprite.findMany({
          skip: skip,
          take: parseInt(limit),
        });
      } else {
        sprites = await prisma.sprite.findMany({
          where: {
            categoryId: parseInt(category),
          },
          skip: skip,
          take: limit,
        });
      }
      return res.json({ count: sprites.length, sprites });
    } catch (e) {
      next(ApiError.badRequest("Getting sprites e rror!"));
    }
  }
  async getSpriteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const sprite = await prisma.sprite.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }
}

export default new SpriteController();
