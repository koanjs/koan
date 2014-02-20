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

  it('should set the application options');
  it('should set the keys for signing cookies');
  it('should compose middleware stack');
  it('should set the routes properly');
  it('should provide a rendering engine for view scripts');
});
