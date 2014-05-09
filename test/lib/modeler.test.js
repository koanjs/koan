'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var request = require('supertest');
var koa = require('koa');
var compose = require('koa-compose');
var dispatch = require('../../lib/dispatcher').routes;
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

  it('should globalize all the models from the given folder');
});
