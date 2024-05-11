import { Request, Response, NextFunction } from "express";

const googleAuth = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Google Auth" });
};

export default googleAuth;
