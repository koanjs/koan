'use strict';

/**
 * Dependencies
 */
var _ = require('lodash');
var options = require('./options');

/**
 * Config
 * @todo DRY
 */
module.exports = {
  middleware: require('./middleware'),
  routes: require('./routes'),
  models: require('./models'),
  redis: require('./redis'),
  options: _.merge(options, require('./environments/' + options.environment)),
  views: require('./views')
};
