'use strict';

/**
 * Dependencies
 */
var koa = require('koa')
  , views = require('co-views')
  , route = require('koa-route')
  , responseTime = require('koa-response-time')
  , compress = require('koa-compress')
  , logger = require('koa-logger')
  , serve = require('koa-static')
  , path = require('path');

/**
 * Application
 */
module.exports = function(config) {
  var app = koa();

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
   * Public folder
   */
  app.use(serve(path.join(process.cwd(), 'public')));

  /**
   * Routes
   */
  var routes = config.routes;
  for (var urlPath in routes) {
    app.use(route.get(urlPath, routes[urlPath]));
  }

  /**
   * View renderer
   */
  app.render = views(path.join(process.cwd(), 'views'), { ext: 'ejs' });

  return app;
}
