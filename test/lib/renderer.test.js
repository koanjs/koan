'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var render = require('../../lib/renderer').render;
var config = {
  views: {
    ext: 'ejs'
  }
};
var cwd = process.cwd();

describe('Renderer', function() {
  before(function(done) {
    process.chdir(path.join(cwd, 'test', 'fixtures', 'application'));

    done();
  });

  after(function(done) {
    process.chdir(cwd);

    done();
  });

  it('should apply defaults on empty config passed');

  it('should pass configuration parameters', function(done) {
    render(config.views)('test', {})(function(err, html) {
      should(err).not.be.ok;
      html.replace(/\n$/, '').should.be.eql('Cool-cool-cool!');

      done();
    });
  });
});
