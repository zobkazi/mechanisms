import { Request, Response, NextFunction } from "express";
import { RegistrationSchema } from "@/types/auth/UserSchemas";
import User from "@/models/auth/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate request body
    const parsedBody = RegistrationSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: parsedBody.error.errors,
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email: parsedBody.data.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password

    // generate token

    // create loin history

    // create new user
    const user = await User.create(parsedBody.data);

    // return success response

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default Registration;
