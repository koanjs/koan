'use strict';

/**
 * Dependencies
 */
var assert = require('assert')
  , fs = require('fs')
  , wrench = require('wrench')
  , _ = require('lodash')
  , path = require('path')
  , exec = require('child_process').exec;

describe('Generate', function(){
  describe('New application', function(){
    var bin = 'node --harmony ./node_modules/istanbul/lib/cli.js cover --hook-run-in-context ./bin/koan.js --dir ./coverage/generator';
    var appName = 'testApp';

    before(function(done) {
      fs.exists(appName, function(exists) {
        if (exists) {
          wrench.rmdirSyncRecursive(appName);
        }
        done();
      });
    });

    after(function(done) {
      fs.exists(appName, function(exists) {
        if (exists) {
          wrench.rmdirSyncRecursive(appName);
        }
        done();
      });
    });

    it('should create a new application', function(done) {
      exec(bin + ' new ' + appName, function(err) {
        if (err)
          return done(new Error(err));

        var nodeModulesPath = path.join(appName, 'node_modules');
        if (fs.existsSync(nodeModulesPath))
          wrench.rmdirSyncRecursive(nodeModulesPath);

        assert(checkGeneratedFiles(appName), 'generated files don\'t match expected files');
        done();
      });
    });

    it('should test the new application successfully', function(done) {
      exec('cd ' + appName + ' && npm install && npm test', function(err) {
        if (err)
          return done(new Error(err));

        assert(!err, 'an error occurred while trying to test a newly created application');
        done();
      });
    });
  });
});


function checkGeneratedFiles(appName) {
  var expectedFiles = [
          '.gitignore',
          'index.js',
          'public',
          'config',
          'package.json',
          'README.md',
          'views',
          'views/home.ejs',
          'public/images',
          'public/js',
          'public/robots.txt',
          'public/css',
          'public/images/.gitkeep',
          'public/images/define_koan.png',
          'public/js/.gitkeep',
          'public/css/.gitkeep',
          'config/routes.js',
          'test',
          'test/index.test.js',
          'test/mocha.opts'
  ];

  // Read actual generated files from disk
  var files = wrench.readdirSyncRecursive(appName);

  // Disregard stupid files
  // (fs-specific, OS-specific, editor-specific, yada yada)
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

  // Everything's ok!
  return true;
}
