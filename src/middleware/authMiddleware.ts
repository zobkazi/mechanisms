import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization failed: No token provided" });
  }
  try {
    const decodedToken = jwt.verify(
      token,
      (process.env.JWT_SECRET as string) || "your_secret_key"
    );
    const { userId, email } = decodedToken as { userId: string; email: string };
    req["userData"] = { email, userId }; // Add userId and email to request object
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Authorization failed: Invalid token" });
  }
};

export default authMiddleware;
