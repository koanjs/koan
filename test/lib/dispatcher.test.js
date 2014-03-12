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

describe('Dispatcher', function() {
  function testPath(urlPath, method, routes, done) {
    var app = koa();
    request(app.use(compose(routes)).listen())
      [method](urlPath)
      .expect(200)
      .expect(urlPath)
      .end(function(err, res) {
        should(err).not.be.Error;

        done();
      });
  }

  before(function(done) {
    process.chdir(path.join(cwd, 'test', 'fixtures', 'application'));

    done();
  });

  after(function(done) {
    process.chdir(cwd);

    done();
  });

  it('should work with empty configuration', function(done) {
    dispatch().should.be.Array.and.be.empty;

    done();
  });

  it('should use GET when no method specified', function(done) {
    var routes = dispatch({
      '/index/test': {
        controller: 'index',
        action: 'test'
      }
    });
    routes.should.be.Array.and.have.length(1);

    testPath('/index/test', 'get', routes, done);
  });

  it('should use \'index\' when no controller is specified', function(done) {
    var routes = dispatch({
      '/index/test': {
        action: 'test'
      }
    });
    routes.should.be.Array.and.have.length(1);

    testPath('/index/test', 'get', routes, done);
  });

  it('should use \'index\' when no action is specified', function(done) {
    var routes = dispatch({
      '/index/index': {
        controller: 'index'
      }
    });
    routes.should.be.Array.and.have.length(1);

    testPath('/index/index', 'get', routes, done);
  });

  it('should work for specified controller / action and method', function(done) {
    var routes = dispatch({
      'post /test/test': {
        controller: 'test',
        action: 'test'
      }
    });
    routes.should.be.Array.and.have.length(1);

    testPath('/test/test', 'post', routes, done);
  });
});
