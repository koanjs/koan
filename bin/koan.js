#!/usr/bin/env node --harmony

var argv = require('optimist').argv;

// Dependencies
var _ = require('lodash')
  , path = require('path')
  , fs = require('fs-extra');

// Stringify args
argv._ = _.map(argv._, function (arg) {
  return arg + '';
});

// Start this app
if (argv._[0] && _.contains(['start', 'server', 's'], argv._[0])) {
  require(path.join(process.cwd(), 'index'));
}

// Basic usage
else if (argv._.length === 0) {
  console.log('');
  console.log('Welcome to Koan!');
  console.log('');
  displayUsage();
}

// Create a new app
// second argument == app name
else if (argv._[0].match(/^new$/)) {

  verifyArg(1, "Please specify the name of the new project folder: e.g.\n koan new <appName>");

  var destination = path.join(process.cwd(), argv._[1]);

  fs.copy(path.join(__dirname, '../lib/boilerplates'), destination,  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.info('New Koan application is created.');
  });
}

// Unknown command, print out usage
else {
  console.log('');
  displayUsage();
  console.log.error(argv._[0] + ' is not a valid action.');
}

// Display usage
function displayUsage() {
  var usage = 'Usage: koan <command>\n\n';
  usage += 'koan start: Run the app in the current dir\n';
  usage += 'koan new <appName>: Create a new Koan project in a folder called <appName>\n';

  console.info(usage);
}

// Verify that an argument exists
function verifyArg(argNo, msg) {
  if (!argv._[argNo]) {
    console.error(msg);
    process.exit(1);
  }
}