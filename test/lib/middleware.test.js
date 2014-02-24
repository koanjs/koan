'use strict';

/**
 * Dependencies
 */
var should = require('should');
var _ = require('lodash');
var stack = require('../../lib/middleware').stack;
var config = {
  middleware: {
    'koa-session': {},
    'koa-response-time': true,
    'koa-logger': true
  }
};

describe('Middleware stack', function() {
  it('should stack middleware passed in config', function(done) {
    stack(config).should.be.an.Array.and.have.length(3);

    done();    
  });

  it('should work gracefully with empty config', function(done) {
    stack().should.be.an.Array.and.be.empty;
    stack({}).should.be.an.Array.and.be.empty;

    done();
  });

  it('should ignore disabled middleware', function(done) {
    var anotherConfig = _.cloneDeep(config);
    anotherConfig.middleware['koa-logger'] = false;
    stack(anotherConfig).should.be.an.Array.and.have.length(2);

    done();
  });
});
