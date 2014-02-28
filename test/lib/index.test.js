'use strict';

/**
 * Dependencies
 */
var should = require('should');
var request = require('supertest');
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

  it('should set the application name', function(done) {
    var app = koan({
      options: {
        name: 'SayMyNameSayMyName'
      }
    });
    app.name.should.be.eql('SayMyNameSayMyName');

    done();
  });

  it('should be able to override the application environment', function(done) {
    var app = koan({
      options: {
        env: 'whatever'
      }
    });
    app.env.should.be.eql('whatever');

    done();
  });

  it('should set the keys for signing cookies', function(done) {
    var app = koan({
      options: {
        cookies: {
          keys: ['sign', 'with', 'this']
        }
      }
    });
    app.keys.should.be.ok;

    done();
  });

  it('should generate CSRF tokens if they are enabled', function(done) {
    var app = koan({
      middleware: {
        'koa-session': {
          key: 'superkey'
        }
      },
      options: {
        cookies: {
          keys: ['something to sign cookies']
        },
        csrf: true
      }
    });

    app.use(function *(next) {
      this.csrf.should.be.ok;
      this.status = 204;
    });

    request(app.listen())
      .get('/')
      .expect(204)
      .end(function(err, res) {
        should(err).not.be.ok;

        done();
      });
  });

  it('should compose middleware stack', function(done) {
    var app = koan({
      middleware: {
        'koa-session': {
          key: 'sessionable'
        },
        'koa-response-time': true,
        'koa-logger': true
      }
    });
    app.middleware.should.be.an.Array.with.length(1);

    done();
  });

  it('should set the routes properly');

  it('should provide a rendering engine for view scripts', function(done) {
    var app = koan();
    app.render.should.be.ok;

    done();
  });
});
