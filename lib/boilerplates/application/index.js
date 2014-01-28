/**
 * Dependencies
 */
var koan = require('koan');

/**
 * Application
 */
var app = global.app = module.exports = koan();

/**
 * Server
 */
app.listen(3000);
console.log('Listening on port 3000...');
