#!/usr/bin/env node
'use strict';

/**
 * Dependencies
 */
var _ = require('lodash');
var path = require('path');
var commander = require('commander');
var NOOP = function () {};

/**
 * Expose commander
 */
module.exports = commander;

/**
 * New application
 */
commander
  .command('new')
  .description('generate new application')
  .usage('koan new <appName>')
  .action(require(path.join(__dirname, 'new')))
  .unknownOption = NOOP;

/**
 * Start this application
 */
commander
  .command('start')
  .description('start the application')
  .usage('koan start')
  .action(require('./start'))
  .unknownOption = NOOP;

/**
 * New controller
 */
commander
  .command('controller')
  .description('generate new controller')
  .usage('koan controller <controllerName>')
  .action(require(path.join(__dirname, 'controller')))
  .unknownOption = NOOP;

/**
 * New model
 */
commander
  .command('model')
  .description('generate new model')
  .usage('koan model <modelName>')
  .action(require(path.join(__dirname, 'model')))
  .unknownOption = NOOP;

/**
 * New resource
 */
commander
  .command('resource')
  .description('generate new resource')
  .usage('koan resource <resourceName>')
  .action(require(path.join(__dirname, 'resource')))
  .unknownOption = NOOP;

/**
 * Help
 */
commander
  .command('help')
  .description('output usage information')
  .usage('koan help')
  .action(commander.help)
  .unknownOption = NOOP;

/**
 * Version
 */
commander
  .version(require('../package.json').version, '-v, --version')
  .usage('[options] <command>')
  .option('--test', 'use testing environment')
  .option('--production', 'use production environment');
commander
  .command('version')
  .description('output version number')
  .usage('koan version')
  .action(commander.versionInformation)
  .unknownOption = NOOP;

commander.unknownOption = NOOP;

if (process.env.NODE_ENV !== 'test') {
  commander.parse(process.argv);

  if (commander.args.length === 0)
    commander.help();
}
