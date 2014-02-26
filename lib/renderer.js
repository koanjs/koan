'use strict';

/**
 * Dependencies
 */
var path = require('path');
var views = require('co-views');

/**
 * View scripts renderer
 */
module.exports.render = function (viewConfig) {
  return views(path.join(process.cwd(), 'views'), viewConfig);
};
