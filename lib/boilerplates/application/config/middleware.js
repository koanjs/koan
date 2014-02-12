'use strict';


/**
 * Dependencies
 */
var path = require('path');
var redis = require('redis');
var redisSettings = require('./redis');

/**
 * Middleware options
 */
module.exports = {
  'koa-session': {
    key: 'koan:sess'
  }, // Session
  'koa-response-time': true, // X-Response-Time
  'koa-logger': true, // Logger
  'koa-etag': true,
  'koa-compress': true,
  'koa-ratelimit': false,
//  {
//    max: 100,
//    duration: 60000,
//    db: redis.createClient(redisSettings.port, redisSettings.host, redisSettings.options)
//  }, // Limiting rate (Redis should be running)
  'koa-static': path.join(process.cwd(), 'public') // Public folder
};
