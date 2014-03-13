'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var cwd = process.cwd();
var render = require(path.join(cwd, 'lib', 'renderer')).render;
var config = {
  views: {
    default: 'ejs'
  }
};

describe('Renderer', function() {
  before(function(done) {
    process.chdir(path.join(cwd, 'test', 'fixtures', 'application'));

    done();
  });

  after(function(done) {
    process.chdir(cwd);

    done();
  });

  it('should apply defaults on empty config passed', function(done) {
    render()('test', {})(function(err, html) {
      should(err).not.be.ok;
      html.replace(/\n$/, '').should.containEql('Cool-cool-cool!');

      done();
    });
  });

  it('should pass configuration parameters', function(done) {
    render(config.views)('test', {})(function(err, html) {
      should(err).not.be.ok;
      html.replace(/\n$/, '').should.containEql('Cool-cool-cool!');

      done();
    });
  });
});
