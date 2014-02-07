'use strict';

/**
 * Dependencies
 */
var koa = require('koa')
  , compose = require('koa-compose')
  , views = require('co-views')
  , route = require('koa-route')
  , session = require('koa-session')
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
    , middleware = []
    , dispatch = require('./dispatcher').dispatch
    , redisClient;

  /**
   * Redis client
   */
  if (config.options.redis) {
    redisClient = redis.createClient(config.options.redis.port
     , config.options.redis.host
     , config.options.redis.options);
  }

  /**
   * X-Response-Time
   */
  middleware.push(responseTime());

  /**
   * Logger
   */
  middleware.push(logger());

  /**
   * Compression
   */
  middleware.push(compress());

  /**
   * Limiting rate
   */
  if (config.options.ratelimit && redisClient) {
    middleware.push(ratelimit({
      max: config.options.ratelimit.limit,
      duration: config.options.ratelimit.duration,
      db: redisClient
    }));
  }

  /**
   * Session
   */
  if (typeof config.options.cookies.keys !== 'undefined') {
    app.keys = config.options.cookies.keys;
    middleware.push(session(config.options.session));
  }

  /**
   * Public folder
   */
  middleware.push(serve(path.join(process.cwd(), 'public')));

  /**
   * Routes
   * @todo provide routing for different types of HTTP-requests
   */
  var routes = config.routes;
  for (var urlPath in routes) {
    middleware.push(route.get(urlPath, dispatch(routes[urlPath])));
  }

  /**
   * Compose
   */
  app.use(compose(middleware));

  /**
   * View renderer
   */
  app.render = views(path.join(process.cwd(), 'views'), { ext: 'ejs' });

  return app;
}
