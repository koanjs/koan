'use strict';

/**
 * Dependencies
 */
var path = require('path');

/**
 * Dispatcher
 */
module.exports.dispatch = function(params) {
  params = params || {};
  params.controller = params.controller || 'index';
  params.action = params.action || 'index';
  var controllerObject = require(path.join(process.cwd(), 'controllers', params.controller));

  return controllerObject[params.action];
}
