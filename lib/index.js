'use strict';

/**
 * Dependencies
 */
var koa = require('koa');
var compose = require('koa-compose');
var views = require('co-views');
var route = require('koa-route');
var path = require('path');

/**
 * Application
 */
module.exports = function(config) {
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
  var stack = require('./middleware').stack(config);

  /**
   * Route dispatcher
   */
  var dispatch = require('./dispatcher').dispatch;

  /**
   * Routes
   * @todo provide routing for different types of HTTP-requests
   */
  var routes = config.routes;
  for (var urlPath in routes) {
    stack.push(route.get(urlPath, dispatch(routes[urlPath])));
  }

  /**
   * Compose
   */
  app.use(compose(stack));

  /**
   * View renderer
   */
  app.render = views(path.join(process.cwd(), 'views'), { ext: 'ejs' });

  return app;
};
