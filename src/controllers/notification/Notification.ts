import { Request, Response, NextFunction } from "express";
import redisClient from "@/redisClient";

const CHANNEL = "notifications";

export const sendNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  if (!message) {
    res.status(400).send("Message is required");
    return;
  }
  await redisClient.publish(CHANNEL, message);
  console.log(`Sent: ${message}`);
  res.send("Notification sent");
};

export const receiveNotifications = async () => {
  const subscriber = redisClient.duplicate();
  await subscriber.connect();
  await subscriber.subscribe(CHANNEL, (message) => {
    console.log(`Received: ${message}`);
    // Handle the received message, e.g., send it to users via WebSocket or any other method.
  });
  console.log("Subscribed to notifications channel");
};
