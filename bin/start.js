'use strict';

/**
 * Application start
 */

/**
 * Dependencies
 */
var path = require('path');
var fork = require('child_process').fork;

module.exports = function () {
  fork(path.join(process.cwd(), 'index'), [], {execArgv: ['--harmony']});
};
