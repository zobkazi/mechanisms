// import { createClient } from "redis";

// const redisClient = createClient();

// redisClient.on("error", (err) => console.error("Redis Client Error", err));

// export const connectRedis = async () => {
//   if (!redisClient.isOpen) {
//     await redisClient.connect();
//     console.log("Connected to Redis");
//   }
// };

// export default redisClient;

const redis = require("redis");
const client = redis.createClient();

client.on("connect", function () {
  console.log("Connected to Redis");
});

client.set("mykey", "Hello, Redis!", redis.print);
client.get("mykey", function (err, reply) {
  console.log(reply); // Output: Hello, Redis!
});
