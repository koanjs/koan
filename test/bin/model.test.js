'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var fs = require('fs');
var wrench = require('wrench');
var commander = require(path.join(process.cwd(), 'bin', 'koan'));
var generate = require(path.join(process.cwd(), 'bin', 'model'));
var folderToClean = false;

describe('Model generator', function() {
  before(function(done) {
    fs.exists('models', function(exists) {
      if (!exists)
        folderToClean = true;

      done();
    });
  });

  after(function(done) {
    if (folderToClean)
      wrench.rmdirSyncRecursive('models');

    done();
  });

  it('should create models folder if it doesn\'t exist', function(done) {
    fs.exists('models', function(folderExists) {
      if (!folderExists) {
        generate('mymodel', commander, function() {
          var modelFile = 'models/mymodel.js';
          fs.exists('models', function(exists) {
            exists.should.be.true;

            done();
          });
        });
      }
      else
        done();
    });
  });

  it('should generate a model file with requested name in models folder', function(done) {
    generate('mymodel', commander, function() {
      var modelFile = 'models/mymodel.js';
      fs.exists(modelFile, function(exists) {
        exists.should.be.true;
        require(path.join(process.cwd(), modelFile)).should.be.an.instanceOf(Object);

        done();
      });
    });
  });
});
