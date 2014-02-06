'use strict';

/**
 * Application options
 */
module.exports = {
/*
  // Rate limiting
  // NOTE: A defined Redis connection (see below) is necessary in order to use rate limiting
  ratelimit: {
    limit: 5,
    duration: 3600
  },
*/

/*
  // Redis connection
  redis: {
  },
*/
  cookies: {
    keys: 'something to sign cookies'
  },

  session: {
    key: 'koan:sess'
  },

  /**
   * Port to start the server on
   */
  port: process.env.PORT || 3000,

  /**
   * Application environment
   */
  environment: process.env.NODE_ENV || 'development'
}
