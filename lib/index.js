/**
 * Dependencies
 */
var koa = require('koa')
  , views = require('co-views')
  , logger = require('koa-logger')
  , path = require('path');

/**
 * Application
 */
module.exports = function(config) {
  var app = koa();

  /**
   * Logger
   */
  app.use(logger());

  /**
   * View renderer
   */
  app.render = views(path.join(process.cwd(), 'views'), { ext: 'ejs' });

  return app;
}