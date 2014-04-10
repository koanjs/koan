'use strict';

/**
 * Resource generator
 */

/**
 * Dependencies
 */
var path = require('path');
var colors = require('colors');
var controller = require('./controller');
var model = require('./model');
var fail = require('./fail');

module.exports = function (resourceName, commander, cb) {
  controller(resourceName, commander, function(err) {
    if (err)
      return fail(err, cb);

    model(resourceName, commander, function(err) {
      if (err)
        return fail(err, cb);

      if (cb)
        cb();
    });
  });
};

