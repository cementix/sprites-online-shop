import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { FileArray, UploadedFile } from "express-fileupload";

class SpriteController {
  async postNewSprite(req: Request, res: Response) {
    // const { name, price } = req.body;
    // const { img } = req.files;
    // let fileName = uuidv4() + ".jpg";
    // img.mv(path.resolve(__dirname, "../"));
  }
  async getAllSprites(req: Request, res: Response) {}
  async getSpriteById(req: Request, res: Response) {}
}

export default new SpriteController();
