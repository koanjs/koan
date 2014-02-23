'use strict';

/**
 * Dependencies
 */
var should = require('should');
var _ = require('lodash');
var path = require('path');
var koan = require('../../lib');

describe('Koan.js application', function() {
  it('should work with empty configuration', function(done) {
    var app = koan();
    app.should.be.ok;
    done();
  });

  it('should set the application options', function(done) {
    var app = koan({
      options: {
        foo: 'bar'
      }
    });
    app.options.foo.should.be.eql('bar');
    done();
  });

  it('should set the keys for signing cookies', function(done) {
    var app = koan({
      options: {
        cookies: {
          keys: 'sign with this'
        }
      }
    });
    app.keys.should.be.ok;
    done();
  });

  it('should compose middleware stack');
  it('should set the routes properly');
  it('should provide a rendering engine for view scripts');
});
