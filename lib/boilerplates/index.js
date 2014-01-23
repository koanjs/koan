/**
 * Dependencies
 */
var route = require('koa-route');
var koan = require('koan');

/**
 * Application
 */
var app = module.exports = koan();

/**
 * Routes
 */
app.use(route.get('/', home));

/**
 * Actions
 */
function *home() {
  this.body = yield app.render('home');
}

/**
 * Server
 */
app.listen(3000);
console.log('Listening on port 3000...');
