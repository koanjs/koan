/**
 * New application generation
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var fs = require('fs-extra');

module.exports = function (appName, commander, cb) {
  var destination = path.join(process.cwd(), appName);

  fs.copy(path.join(__dirname, '../lib/boilerplates/application'), destination,  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    if (process.env.NODE_ENV !== 'test')
      console.info('New Koan.js application is created.'.green);

    if (cb)
      cb();
  });
};