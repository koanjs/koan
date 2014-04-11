'use strict';

/**
 * Failure handler
 */

/**
 * Dependencies
 */
var colors = require('colors');

module.exports = function(err, cb) {
  if (err) {
    if (cb)
      return cb(err);

    console.error(err.message.red);
    process.exit(1);
  }
}
