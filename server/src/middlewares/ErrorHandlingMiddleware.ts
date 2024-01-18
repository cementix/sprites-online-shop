import ApiError from "../errors/ApiError.js";
import { Request, Response, NextFunction } from "express";

export const middleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Unexpected error!" });
};
