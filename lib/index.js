'use strict';

/**
 * Dependencies
 */
var koa = require('koa');
var compose = require('koa-compose');
var views = require('co-views');
var route = require('koa-route');
var stack = require('./middleware').stack;
var dispatch = require('./dispatcher').dispatch;
var path = require('path');

/**
 * Application
 */
module.exports = function (config) {
  config = config || {};
  config.middleware = config.middleware || {};
  config.options = config.options || {};

  /**
   * Original Koa.js application
   */
  var app = koa();

  /**
   * Session support
   */
  if (typeof config.options.cookies.keys !== 'undefined')
    app.keys = config.options.cookies.keys;

  /**
   * Middleware stack
   */
  var middleware = stack(config);

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
};
