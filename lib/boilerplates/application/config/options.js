'use strict';

/**
 * Application options
 */
module.exports = {
  /**
   * Cookie keys
   */
  cookies: {
    keys: ['something to sign cookies']
  },

  /**
   * Enable CSRF token generation
   */
  csrf: true,

  /**
   * Port to start the server on
   */
  port: process.env.PORT || 3000,

  /**
   * Application environment
   */
  environment: process.env.NODE_ENV || 'development'
};
