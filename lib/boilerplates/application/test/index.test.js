'use strict';

/**
 * Dependencies
 */
var app = require('../');
var request = require('supertest').agent(app.listen());

describe('Application', function(){
  describe('GET /', function(){
    it('should respond with a rendered view', function(done){
      request
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .expect(/Welcome to your brand new Koa.js application./, done);
    });
  });
});
