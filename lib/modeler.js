'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var path = require('path');
var coDb = require('co-jugglingdb');
var Schema = coDb(require('jugglingdb')).Schema;

/**
 * Modeler
 */
module.exports.load = function(config) {
  config = config || {};
  var models = {};
  if (!config.adapter)
    return {};
  var adapter = Object.keys(config.adapter).pop();
  var schema = new Schema(adapter, config.adapter[adapter]);
  var folder = config.folder;
  folder = folder || process.cwd() + '/models';

  var files = (fs.existsSync(folder)) ? fs.readdirSync(folder) : [];
  files.forEach(function(f) {
    if (path.extname(f).toLowerCase() === '.js') {
      var model = require(path.join(folder, f));
      if (model instanceof Object) {
        var modelName = path.basename(f).split('.')[0].toLowerCase();
        modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
        global[modelName] = models[modelName] = schema.define(modelName, model);
      }
    }
  });

  return models;
};
