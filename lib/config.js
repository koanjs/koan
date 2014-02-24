'use strict';

/**
 * Dependencies
 */
var redis = require('redis');

/**
 * Configuration manager
 */
module.exports.adjust = function (config) {
  /**
   * Session support
   */
  if ((typeof config.options === 'undefined')||(typeof config.options.cookies.keys === 'undefined'))
    config.middleware['koa-session'] = false;

  /**
   * Redis client
   */
  if (config.redis) {
    var redisClient = redis.createClient(config.redis.port, config.redis.host, config.redis.options);

    /**
     * @todo Remove rate limiting middleware from application's stack if Redis connection is broken
     */
    redisClient.on('error', function(err) {
      if ((config.middleware['koa-ratelimit'])&&(process.env.NODE_ENV !== 'test'))
        console.log('Unable to establish connection to Redis, related functionality may not work properly...');
    });
  }
  else {
    if (config.middleware['koa-ratelimit'] !== false)
      config.middleware['koa-ratelimit'] = false;
  }

  return config;
};
