'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var fs = require('fs');
var wrench = require('wrench');
var commander = require(path.join(process.cwd(), 'bin', 'koan'));
var generate = require(path.join(process.cwd(), 'bin', 'controller'));
var folderToClean = false;

describe('Controller generator', function() {
  before(function(done) {
    fs.exists('controllers', function(exists) {
      if (!exists)
        folderToClean = true;

      done();
    });
  });

  after(function(done) {
    if (folderToClean)
      wrench.rmdirSyncRecursive('controllers');

    done();
  });

  it('should create controllers folder if it doesn\'t exist', function(done) {
    fs.exists('controllers', function(folderExists) {
      if (!folderExists) {
        generate('mycontroller', commander, function() {
          var controllerFile = 'controllers/mycontroller.js';
          fs.exists('controllers', function(exists) {
            exists.should.be.true;

            done();
          });
        });
      }
      else
        done();
    });
  });

  it('should generate a controller file with requested name in controllers folder', function(done) {
    generate('mycontroller', commander, function() {
      var controllerFile = 'controllers/mycontroller.js';
      fs.exists(controllerFile, function(exists) {
        exists.should.be.true;
        require(path.join(process.cwd(), controllerFile)).should.be.an.instanceOf(Object);

        done();
      });
    });
  });
});
