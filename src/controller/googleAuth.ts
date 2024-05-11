import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { Request } from "express";

// Assuming you have a User model for interacting with your database
// import User from "./models/User";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      passReqToCallback: true,
    },
    async (
      req: Request,
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      try {
        // Check if user already exists
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If user does not exist, create a new one
          user = new User({ googleId: profile.id });
          await user.save();
        }

        // Pass user to the done callback
        done(null, user);
      } catch (err) {
        // Handle errors
        done(err, null);
      }
    }
  )
);
