const Redis = require('ioredis')

const redis = new Redis()

redis.LPUSH ('key', 'value', function (err, reply) {
    
})



redis.get('kye', function (err, reply) {
    console.log(reply);
})