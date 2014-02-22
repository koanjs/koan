'use strict';

/**
 * Dependencies
 */
var should = require('should');
var fs = require('fs');
var wrench = require('wrench');
var _ = require('lodash');
var path = require('path');
var exec = require('child_process').exec;

describe('Application', function() {
  var bin = '../../../bin/koan.js';
  var boilerplatePath = './lib/boilerplates/application';

  it('should start without errors', function(done) {
    exec('cd ' + boilerplatePath + ' && npm install && ' + bin + ' start', function(err) {
      if (err)
        return done(new Error(err));

      should.not.exist(err);
      done();
    });
  });
});