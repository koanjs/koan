'use strict';

/**
 * Dependencies
 */
var koa = require('koa');
var compose = require('koa-compose');
var views = require('co-views');
var route = require('koa-route');
var session = require('koa-session');
var responseTime = require('koa-response-time');
var ratelimit = require('koa-ratelimit');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var path = require('path');
var redis = require('redis');

/**
 * Application
 */
module.exports = function(config) {
  config = config || {};

  var app = koa();
  var middleware = [];
  var dispatch = require('./dispatcher').dispatch;
  var redisClient;

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
   * Session
   */
  if (typeof config.options.cookies.keys !== 'undefined') {
    app.keys = config.options.cookies.keys;
    app.use(session(config.options.session));
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
};
