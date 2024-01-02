import jwt, { JwtPayload } from "jsonwebtoken";
import ApiError from "../errors/ApiError.js";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.SECRET_KEY;

export default function (role: string) {
  return function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (req.method === "OPTIONS") {
        next();
      }

      const token = req.headers.authorization?.split(" ")[1];

      if (!token || !secretKey) {
        return next(ApiError.unauthorized("Unauthorized"));
      }

      const decoded = jwt.verify(token, secretKey);
      if (!(decoded as JwtPayload).roles.includes(role)) {
        return next(ApiError.forbidden("Forbidden"));
      }
      (req as any).user = decoded;
      next();
    } catch (e) {
      return next(ApiError.unauthorized("Unauthorized"));
    }
  };
}
