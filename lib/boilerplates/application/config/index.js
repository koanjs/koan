'use strict';

/**
 * Config
 * @todo DRY
 */
module.exports = {
  middleware: require('./middleware'),
  routes: require('./routes'),
  redis: require('./redis'),
  options: require('./options')
};
