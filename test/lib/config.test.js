'use strict';

/**
 * Dependencies
 */
var should = require('should');
var _ = require('lodash');
var redis = require('redis');
var adjust = require('../../lib/config').adjust;
var redisSettings = {
  port: 1234,
  host: 'fake.host',
  options: {}
};
var config = {
  middleware: {
    'koa-session': true,
    'koa-ratelimit': { // Rate limiting
      max: 100,
      duration: 60000,
      db: redis.createClient(redisSettings.port, redisSettings.host, redisSettings.options)
    }, // Limiting rate (Redis should be running)
  },
  redis: redisSettings
};

describe('Configuration manager', function() {
  it('should disable session support when no keys are set', function(done) {
    var anotherConfig = _.cloneDeep(config);
    adjust(anotherConfig).middleware['koa-session'].should.be.false;

    done();
  });

  it('should disable rate limiting when no redis configuration is presented', function(done) {
    var anotherConfig = _.cloneDeep(config);
    delete anotherConfig.redis;
    adjust(anotherConfig).middleware['koa-ratelimit'].should.be.false;

    done();
  });
});
