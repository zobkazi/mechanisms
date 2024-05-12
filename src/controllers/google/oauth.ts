import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import fetch from "node-fetch";

const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const REDIRECT_URL = process.env.REDIRECT_URL || "";

const getUserData = async (accessToken: string) => {
  try {
    const response = await fetch(
      `prpcess.env.BASE_URL?access_token=${accessToken}`
    );
    const data = await response.json();
    ``;
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

    const tokens = await oAuth2Client.getToken(code as string);

    await oAuth2Client.setCredentials(tokens.tokens);

    console.log(tokens.tokens);

    const user = oAuth2Client.credentials;

    console.log(user);

    await getUserData(oAuth2Client.credentials.access_token as string);
  } catch (error) {
    console.error("Error logging in with OAuth2 user", error);
    res.status(500).send("Internal Server Error");
  }
};

export default authUserData;
