#!/usr/bin/env node
'use strict';

/**
 * Dependencies
 */
var _ = require('lodash');
var commander = require('commander');
var NOOP = function () {};

/**
 * Expose commander
 */
module.exports = commander;

/**
 * Normalizing the arguments
 */
process.argv = _.map(process.argv, function(arg) {
  return arg.toLowerCase();
});

/**
 * New application
 */
commander
  .command('new')
  .description('generate new application')
  .usage('koan new <appName>')
  .action(require('./new'))
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

commander.parse(process.argv);

if ((process.env.NODE_ENV !== 'test')&&(commander.args.length === 0))
  commander.help();