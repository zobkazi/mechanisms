import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import fetch from "node-fetch";

const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const REDIRECT_URL = "http://localhost:3000/oauth";

const getUserData = async (accessToken: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};

const authUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = req.query.code as string;

  try {
    const oAuth2Client = new OAuth2Client(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL
    );

    const { tokens } = await oAuth2Client.getToken(code);
    // Make sure to set the credentials on the OAuth2 client.
    oAuth2Client.setCredentials(tokens);
    console.info("Tokens acquired.");
    const user = await getUserData(tokens.access_token as string);
    console.log("User Data:", user);
    res.redirect(303, "http://localhost:5173/"); // Redirect to your desired URL after successful authentication
  } catch (error) {
    console.error("Error logging in with OAuth2 user", error);
    res.status(500).send("Internal Server Error");
  }
};

export default authUserData;
