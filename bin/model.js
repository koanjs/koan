'use strict';

/**
 * Model generator
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var fs = require('fs-extra');
var fail = require('./fail');

module.exports = function (modelName, commander, cb) {
  var destination = path.join(process.cwd(), 'models');
  if (!fs.existsSync('models'))
    fs.mkdirSync('models');

  destination = path.join(destination, modelName + '.js');

  fs.copy(path.join(__dirname, '../lib/boilerplates/models/default.js'), destination,  function(err) {
    if (err)
      return fail(err, cb);

    if (process.env.NODE_ENV !== 'test')
      console.info('New Koan.js model is created.'.green);

    if (cb)
      cb();
  });
};
