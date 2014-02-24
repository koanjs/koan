'use strict';

/**
 * Dependencies
 */
var path = require('path');
var router = require('koa-route');
var methods = require('methods');

/**
 * Dispatcher
 */
module.exports.routes = function(routeConfig) {
  var routes = [];

  for (var urlPath in routeConfig) {
    // Extract HTTP method
    var method = 'get';
    var pathSegments = urlPath.split(' ');
    if (pathSegments.length > 1) {
      var prefix = pathSegments.shift().trim().toLowerCase();
      if (methods.indexOf(prefix) !== -1) {
        method = prefix;
        urlPath = pathSegments.join();
      }
    }

    // Get controller / action
    var params = routeConfig[urlPath] || {};
    params.controller = params.controller || 'index';
    params.action = params.action || 'index';
    var controllerObject = require(path.join(process.cwd(), 'controllers', params.controller));
    routes.push(router[method](urlPath, controllerObject[params.action]));
  }

  return routes;
};
