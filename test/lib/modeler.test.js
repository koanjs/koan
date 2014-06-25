'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var loadModels = require('../../lib/modeler').load;
var cwd = process.cwd();

describe('Modeler', function() {
  before(function(done) {
    process.chdir(path.join(cwd, 'test', 'fixtures', 'application'));

    done();
  });

  after(function(done) {
    process.chdir(cwd);

    done();
  });

  it('should globalize all the models from the given folder', function(done) {
    loadModels({
      adapter: {
        memory: {}
      }
    });

    One.should.be.a.Function;

    done();
  });
});
