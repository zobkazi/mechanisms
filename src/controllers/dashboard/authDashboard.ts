import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authDashboard = (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if user is authenticated
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.redirect("/login");
    }
    // If user is authenticated, verify the token
    const decodedToken = jwt.verify(
      token,
      (process.env.JWT_SECRET as string) || "your_secret_key"
    );

    // if user is not authenticated, redirect to login page
    req["userData"] = decodedToken;

    if (!req["userData"]) {
      return res.redirect("/login");
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default authDashboard;
