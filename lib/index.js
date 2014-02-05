'use strict';

/**
 * Dependencies
 */
var koa = require('koa')
  , views = require('co-views')
  , route = require('koa-route')
  , responseTime = require('koa-response-time')
  , ratelimit = require('koa-ratelimit')
  , compress = require('koa-compress')
  , logger = require('koa-logger')
  , serve = require('koa-static')
  , path = require('path')
  , redis = require('redis');

/**
 * Application
 */
module.exports = function(config) {
  config = config || {};

  var app = koa()
    , dispatch = require('./dispatcher').dispatch
    , redisClient;

  /**
   * Redis client
   */
  if (config.options.redis) {
    redisClient = redis.createClient(config.options.redis.port, config.options.redis.host, config.options.redis.options);
  }

  /**
   * X-Response-Time
   */
  app.use(responseTime());

  /**
   * Logger
   */
  app.use(logger());

  /**
   * Compression
   */
  app.use(compress());

  /**
   * Limiting rate
   */
  if (config.options.ratelimit && redisClient) {
    app.use(ratelimit({
      max: config.options.ratelimit.limit,
      duration: config.options.ratelimit.duration,
      db: redisClient
    }));
  }

  /**
   * Public folder
   */
  app.use(serve(path.join(process.cwd(), 'public')));

  /**
   * Routes
   * @todo provide routing for different types of HTTP-requests
   */
  var routes = config.routes;
  for (var urlPath in routes) {
    app.use(route.get(urlPath, dispatch(routes[urlPath])));
  }

  /**
   * View renderer
   */
  app.render = views(path.join(process.cwd(), 'views'), { ext: 'ejs' });

  return app;
}
