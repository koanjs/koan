/**
 * New application generation
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var fs = require('fs-extra');

module.exports = function (appName) {
  var destination = path.join(process.cwd(), appName);

  fs.copy(path.join(__dirname, '../lib/boilerplates/application'), destination,  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.info('New Koan application is created.'.green);
  });
};