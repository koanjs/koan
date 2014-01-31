'use strict';

/**
 * Dependencies
 */
var koan = require('koan'),
  config = require('./config');

/**
 * Application
 */
var app = global.app = module.exports = koan(config);

/**
 * Server
 */
var port = config.options.port;
app.listen(port);
console.log('Listening on port %s...', port);
