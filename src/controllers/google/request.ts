// Import required modules
import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";

const requestByGoogle = (req: Request, res: Response, next: NextFunction) => {
  // req headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Referrer-Policy", "no-referrer");

  const redirectUri = "http://localhost:3000/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUri
  );

  // Redirect user to Google authentication page

  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
    include_granted_scopes: true,
  });

  res.json({ url: oAuth2Client.generateAuthUrl({ access_type: "offline" }) });
};

export default requestByGoogle;
