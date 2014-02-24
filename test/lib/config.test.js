'use strict';

/**
 * Dependencies
 */
var should = require('should');

describe('Configuration', function() {
  it('should disable session support when no keys are set');
  it('should disable rate limiting when no redis connection can be established');
  it('should disable rate limiting when no redis configuration is presented');
});
