'use strict';

/**
 * Dependencies
 */
var redis = require('redis');

/**
 * Application
 * @todo Move config validation into a separate module
 */
module.exports.stack = function (config) {
  config = config || {};

  var stack = [];

  /**
   * Session support
   */
  if (typeof config.options.cookies.keys === 'undefined')
    config.middleware['session'] = false;

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

  /**
   * Loading configured middleware
   */
  Object.keys(config.middleware).forEach(function(middleware) {
    var options = config.middleware[middleware];
    if (options !== false)
      stack.push(require(middleware)(((options !== true)?options:null)));
  });

  return stack;
};
