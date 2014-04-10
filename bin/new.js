'use strict';

/**
 * New application generation
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var fs = require('fs-extra');
var fail = require('./fail');

module.exports = function (appName, commander, cb) {
  var destination = path.join(process.cwd(), appName);

  fs.exists(destination, function(exists) {
    if (exists)
      return fail(new Error('Folder with this name already exists within the current path!'), cb);
    
    fs.copy(path.join(__dirname, '../lib/boilerplates/application'), destination,  function(err) {
      if (err)
        return fail(err, cb);
      
      if (process.env.NODE_ENV !== 'test')
        console.info('New Koan.js application is created.'.green);

      if (cb)
        cb();
    });
  });
};
