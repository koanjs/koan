'use strict';

/**
 * Configuration
 */
module.exports.adjust = function (config) {
  /**
   * Session support
   */
  if (typeof config.options.cookies.keys === 'undefined')
    config.middleware.session = false;

  /**
   * Redis client
   */
  if (config.redis) {
    var redisClient = redis.createClient(config.redis.port, config.redis.host, config.redis.options);

    redisClient.on('error', function(err) {
      console.log('Unable to establish connection to Redis, related functionality will be disabled...');
      config.middleware['koa-ratelimit'] = false;
    });
  }
  else {
    if (config.middleware['koa-ratelimit'] !== false)
      config.middleware['koa-ratelimit'] = false;
  }

  return config;
};
