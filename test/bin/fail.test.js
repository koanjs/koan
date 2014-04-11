'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var fail = require(path.join(process.cwd(), 'bin', 'fail'));

describe('Failure handler', function() {
  it('should pass the error to the callback if the latter is present', function(done) {
    fail('instead of an Error object', function(err) {
      err.should.be.eql('instead of an Error object');
        
      done();
    });
  });
});
