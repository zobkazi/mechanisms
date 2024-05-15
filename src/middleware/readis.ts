import Redis from "ioredis";

const redis = new Redis();

redis.lpush("key", "value", function (err, reply) {});

redis.get("kye", function (err, reply) {
  console.log(reply);
});
