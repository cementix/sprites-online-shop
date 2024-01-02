import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secretKey = process.env.SECRET_KEY;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.method === "OPTIONS") {
      next();
    }

    const token = req.headers.authorization?.split(" ")[1];

    if (!token || !secretKey) {
      return next(ApiError.unauthorized("Unauthorized"));
    }

    const decoded = jwt.verify(token, secretKey);
    (req as any).user = decoded;
    next();
  } catch (e) {
    return next(ApiError.unauthorized("Unauthorized"));
  }
};
