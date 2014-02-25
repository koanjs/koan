'use strict';

/**
 * Dependencies
 */
var koa = require('koa');
var compose = require('koa-compose');
var views = require('co-views');
var stack = require('./middleware').stack;
var dispatch = require('./dispatcher').routes;
var adjust = require('./config').adjust;
var path = require('path');

/**
 * Application
 */
module.exports = function (config) {
  config = config || {};
  config.middleware = config.middleware || {};
  config.options = config.options || {};
  config.options.cookies = config.options.cookies || {};

  /**
   * Original Koa.js application
   */
  var app = koa();

  /**
   * Application options
   */
  app.options = config.options; 

  /**
   * Session support
   */
  if (typeof config.options.cookies.keys !== 'undefined')
    app.keys = config.options.cookies.keys;

  /**
   * Config verification and adjustment
   */
  config = adjust(config);

  /**
   * Middleware stack
   */
  var middleware = stack(config);

  /**
   * Routes
   */
  middleware.concat(dispatch(config.routes));

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
