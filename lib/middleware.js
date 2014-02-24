'use strict';

/**
 * Dependencies
 */
var redis = require('redis');

/**
 * Middleware stack
 * @todo Move config validation into a separate module
 */
module.exports.stack = function (config) {
  config = config || {};

  var stack = [];

  /**
   * Loading configured middleware
   */
  Object.keys(config.middleware).forEach(function(middleware) {
    var options = config.middleware[middleware];
    if (options !== false)
      stack.push(require(middleware)(((options !== true)?options:null)));
  });

  return stack;
};
