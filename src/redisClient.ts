import { createClient } from "redis";

const redisClient = createClient();

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("Connected to Redis");
  }
};

export default redisClient;
