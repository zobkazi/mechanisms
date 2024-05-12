// Import required modules
import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20"; // Import GoogleStrategy from passport-google-oauth20
import { UserByGoogle, UserByGoogleDocument } from "@/models/auth/UserByGoogle";
import { Request, Response, NextFunction } from "express";

// Controller function for handling Google authentication
export const googleAuthController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

export default googleAuthController;
