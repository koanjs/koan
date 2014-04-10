'use strict';

/**
 * Controller generator
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var fs = require('fs-extra');
var fail = require('./fail');

module.exports = function (controllerName, commander, cb) {
  var destination = path.join(process.cwd(), 'controllers');
  if (!fs.existsSync('controllers'))
    fs.mkdirSync('controllers');

  destination = path.join(destination, controllerName + '.js');

  fs.copy(path.join(__dirname, '../lib/boilerplates/controllers/default.js'), destination,  function(err) {
    if (err)
      return fail(err, cb);

    if (process.env.NODE_ENV !== 'test')
      console.info('New Koan.js controller is created.'.green);

    if (cb)
      cb();
  });
};

