#!/usr/bin/env node
'use strict';

/**
 * Dependencies
 */
var _ = require('lodash');
var path = require('path');
var fs = require('fs-extra');
var fork = require('child_process').fork;
var commander = require('commander');
var colors = require('colors');
var NOOP = function () {};

/**
 * Normalizing the arguments
 */
process.argv = _.map(process.argv, function(arg) {
  return (arg === '-V') ? '-v' : arg;
});

/**
 * Version
 */
commander
  .version(require('../package.json').version, '-v, --version')
  .usage('<command>')
  .option('--test', 'Testing environment')
  .option('--production', 'Production environment');

commander.command('version')
	.description('')
	.action(commander.versionInformation);

/**
 * Start this application
 */
commander
  .command('start')
  .description('')
  .usage('[something]')
  .action(require('./start'));

/**
 * New application
 */
commander
  .command('new')
  .description('')
  .usage('[something]')
  .action(function() {
    console.log('something new');
  });

commander.parse(process.argv);

console.dir(commander);

//// Start this app
//if (argv._[0] && _.contains(['start', 'server', 's'], argv._[0])) {
//  fork(path.join(process.cwd(), 'index'), [], {execArgv: ['--harmony']});
//}
//
//// Basic usage
//else if (argv._.length === 0) {
//  console.log('');
//  console.log('Welcome to Koan!');
//  console.log('');
//  displayUsage();
//}
//
//// Create a new app
//// second argument == app name
//else if (argv._[0].match(/^new$/)) {
//
//  verifyArg(1, "Please specify the name of the new project folder: e.g.\n koan new <appName>");
//
//  var destination = path.join(process.cwd(), argv._[1]);
//
//  fs.copy(path.join(__dirname, '../lib/boilerplates/application'), destination,  function(err) {
//    if (err) {
//      console.error(err);
//      process.exit(1);
//    }
//
//    console.info('New Koan application is created.');
//  });
//}
//
//// Unknown command, print out usage
//else {
//  console.log('');
//  displayUsage();
//  console.log.error(argv._[0] + ' is not a valid action.');
//}
//
//// Display usage
//function displayUsage() {
//  var usage = 'Usage: koan <command>\n\n';
//  usage += 'koan start: Run the app in the current dir\n';
//  usage += 'koan new <appName>: Create a new Koan project in a folder called <appName>\n';
//
//  console.info(usage);
//}
//
//// Verify that an argument exists
//function verifyArg(argNo, msg) {
//  if (!argv._[argNo]) {
//    console.error(msg);
//    process.exit(1);
//  }
//}
