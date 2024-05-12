import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { LoginSchema, LoginHistorySchema } from "@/types/auth/UserSchemas";
import User from "@/models/auth/User";
import LoginHistory from "@/models/auth/LoginHistory";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate request body
    const parsedBody = LoginSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: parsedBody.error.errors,
      });
    }
    // check if user exists
    const user = await User.findOne({ email: parsedBody.data.email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      parsedBody.data.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // create Login user history
    const userAgent =
      (req.headers["user-agent"] as String) || "unknown" || "unknown";
    const ipAddress = req.ip || "unknown";
    const loginHistory = await LoginHistory.create({
      email: user.email,
      action: "login",
      userAgent,
      ipAddress,
    });

    // create JWT token
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      (process.env.JWT_SECRET as string) || "your_secret_key"
    );
    // return token
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      loginHistory: loginHistory,
    });

    //
  } catch (error) {
    next(error);
  }
};

export default login;
