import ApiError from "../errors/ApiError.js";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import emailCheck from "email-check";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

const secretKey = process.env.SECRET_KEY;

config();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const generateAccessToken = (
  id: number,
  email: string,
  roles: Array<string>
) => {
  const payload = {
    id,
    email,
    roles,
  };

  if (!secretKey) {
    return ApiError.internal("Jwt token error");
  }

  return jwt.sign(payload, secretKey, { expiresIn: "15m" });
};

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.badRequest(
            "Registration error, check your email and password"
          )
        );
      }

      const { email, password } = req.body;
      const candidate = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (candidate) {
        return next(ApiError.badRequest("User already exists"));
      }

      try {
        const isEmailValid = await emailCheck(email);
        if (!isEmailValid) {
          return next(ApiError.badRequest("Email does not exist"));
        }
      } catch (e: any) {
        if (e.message === "refuse") {
          return next(ApiError.badRequest("Email is not valid"));
        }
      }

      const hashPassword = await bcrypt.hash(password, 7);
      const user = await prisma.user.create({
        data: {
          email: email,
          password: hashPassword,
        },
      });

      const basket = await prisma.basket.create({
        data: {
          userId: user.id,
        },
      });

      if (!secretKey) {
        return next(ApiError.internal("Jwt token error"));
      }

      const token = generateAccessToken(user.id, user.email, user.roles);

      return res.json({ message: "User created successfully", token });
    } catch (e) {
      console.log(e);
      return next(ApiError.badRequest("Registration error"));
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return next(ApiError.badRequest("User does not exist"));
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return next(ApiError.badRequest("Incorrect password"));
      }

      const token = generateAccessToken(user.id, user.email, user.roles);

      return res.json({ token });
    } catch (e) {
      console.log(e);
      return next(ApiError.badRequest("Login Error"));
    }
  }

  async check(req: Request, res: Response, next: NextFunction) {
    // await prisma.user.deleteMany();
    // await prisma.basket.deleteMany();
    // res.json({ message: "DATABASE DROPPED SUCCESSFULLY!!!" });
    const user = (req as any).user;
    const token = generateAccessToken(user.id, user.email, user.roles);
    return res.json({ token });
  }
}

export default new UserController();
