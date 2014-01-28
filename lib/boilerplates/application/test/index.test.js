'use strict';

/**
 * Dependencies
 */
var app = require('../')
  , request = require('supertest').agent(app.listen());

describe('Application', function(){
  describe('GET /', function(){
    it('should respond with a rendered view', function(done){
      request
      .get('/')
      .expect(200)
      .expect('<p>Welcome to your brand new Koa.js application.</p>', done);
    });
  });
});
