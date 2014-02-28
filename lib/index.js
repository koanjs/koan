'use strict';

/**
 * Dependencies
 */
var koa = require('koa');
var compose = require('koa-compose');
var csrf = require('koa-csrf');
var stack = require('./middleware').stack;
var dispatch = require('./dispatcher').routes;
var adjust = require('./config').adjust;
var render = require('./renderer').render;
var path = require('path');

/**
 * Application
 */
module.exports = function (config) {
  config = config || {};
  config.middleware = config.middleware || {};
  config.options = config.options || {};
  config.options.cookies = config.options.cookies || {};
  config.views = config.views || {};

  /**
   * Original Koa.js application
   */
  var app = koa();

  /**
   * Application options
   */
  app.options = config.options; 

  /**
   * Application name
   */
  app.name = config.options.name || app.name;

  /**
   * Environment
   */
  app.env = config.options.env || app.env;

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
   * CSRF token support
   */
  if ((typeof config.options.csrf !== 'undefined')
    &&(config.options.csrf)
    &&(config.middleware['koa-session'])
    &&(app.keys))
    csrf(app, (config.options.csrf === true)?{}:config.options.csrf);

  /**
   * View renderer
   */
  app.render = render(config.views);

  return app;
};
