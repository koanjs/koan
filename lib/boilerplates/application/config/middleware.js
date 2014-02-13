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
  }, // Sessions
  'koa-response-time': true, // X-Response-Time
  'koa-logger': true, // Logger
  'koa-conditional-get': true, // Conditional GET support
  'koa-etag': true, // ETag support
  'koa-compress': true, // Response compression
  'koa-ratelimit': false, // Rate limiting
//  {
//    max: 100,
//    duration: 60000,
//    db: redis.createClient(redisSettings.port, redisSettings.host, redisSettings.options)
//  }, // Limiting rate (Redis should be running)
  'koa-static': path.join(process.cwd(), 'public') // Public folder
};
