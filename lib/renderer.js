'use strict';

/**
 * Dependencies
 */
var path = require('path');
var views = require('koan-views');
var defaults = require(path.join(
  __dirname,
  'boilerplates',
  'application',
  'config',
  'views'
));

/**
 * View scripts renderer
 */
module.exports.render = function (viewConfig) {
  viewConfig = viewConfig || defaults;
  viewConfig.default = viewConfig.default || defaults.default;
  
  return views(path.join(process.cwd(), 'views'), viewConfig);
};
