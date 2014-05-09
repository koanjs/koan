'use strict';

/**
 * Dependencies
 */
var should = require('should');
var fs = require('fs');
var wrench = require('wrench');
var _ = require('lodash');
var path = require('path');
var commander = require(path.join(process.cwd(), 'bin', 'koan'));
var generate = require(path.join(process.cwd(), 'bin', 'new'));
var exec = require('child_process').exec;

describe('New application', function() {
  var bin = './bin/koan.js';
  var appName = 'testApp';
  var anotherAppName = 'anotherTestApp';

  /**
   * Cleaning up the temporary testing application
   */
  function cleanUp(done) {
    fs.exists(appName, function(exists) {
      if (exists) {
        wrench.rmdirSyncRecursive(appName);
      }
      
      fs.exists(anotherAppName, function(exists) {
        if (exists) {
          wrench.rmdirSyncRecursive(anotherAppName);
        }
        
        done();
      });
    });
  }

  /**
   * Verify the files generated
   */
  function checkGeneratedFiles(appName) {
    var expectedFiles = [
      '.gitignore',
      'index.js',
      'public',
      'config',
      'package.json',
      'README.md',
      'controllers',
      'controllers/index.js',
      'controllers/pages.js',
      'models',
      'models/.gitkeep',
      'views',
      'views/home.ejs',
      'views/pages',
      'views/pages/about.ejs',
      'views/errors.html',
      'views/layout.ejs',
      'views/another-layout.ejs',
      'public/images',
      'public/js',
      'public/robots.txt',
      'public/css',
      'public/images/.gitkeep',
      'public/images/define_koan.png',
      'public/js/.gitkeep',
      'public/css/.gitkeep',
      'config/middleware.js',
      'config/redis.js',
      'config/routes.js',
      'config/options.js',
      'config/models.js',
      'config/index.js',
      'config/views.js',
      'config/environments',
      'config/environments/development.js',
      'config/environments/production.js',
      'config/environments/test.js',
      'test',
      'test/index.test.js',
      'test/mocha.opts'
    ];

    // Read actual generated files from disk
    var files = wrench.readdirSyncRecursive(appName);

    // Disregard temporary files
    files = _.reject(files, function(f) {
      return f.match(/^node_modules/) || f.match(/.DS_Store/gi) || f.match(/\*~$/);
    });

    // Generate diff
    var diff = _.difference(files, expectedFiles);
  
    // Uneven # of files
    if (files.length !== expectedFiles.length) {
      return false;
    }

    // Files don't match
    if (diff.length !== 0) {
      return false;
    }

    // Everything is fine
    return true;
  }

  before(function (done) {
    return cleanUp(done);
  });

  after(function (done) {
    return cleanUp(done);
  });

  it('should be successfully generated if folder doesn\'t exist', function(done) {
    generate(appName, commander, function() {
      checkGeneratedFiles(appName).should.be.eql(true, 'generated files don\'t match expected files');

      done();
    });
  });

  it('should have all the default tests passing', function(done) {
    exec('cd ' + appName + ' && npm install && npm test', function(err) {
      if (err)
        return done(err);

      should(err).not.be.Error;

      done();
    });
  });

  it('shouldn\'t be generated if a folder with the same name exists', function(done) {
    generate(anotherAppName, commander, function(err) {
      should(err).not.be.Error;

      generate(anotherAppName, commander, function(err) {
        should(err).be.Error;
      
        done();
      });
    });
  });
});
