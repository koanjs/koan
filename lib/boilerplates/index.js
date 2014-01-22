/**
 * Dependencies
 */
var logger = require('koa-logger');
var route = require('koa-route');
var views = require('co-views');
var koa = require('koa');

/**
 * Application
 */
var app = module.exports = koa();

/**
 * Helpers
 */
var render = views(__dirname + '/views', { ext: 'ejs' });

/**
 * Logger
 */
app.use(logger());

/**
 * Routes
 */
app.use(route.get('/', home));

/**
 * Actions
 */
function *home() {
  this.body = yield render('home');
}

/**
 * Server
 */
app.listen(3000);
console.log('Listening on port 3000...');
