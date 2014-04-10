'use strict';

/**
 * Dependencies
 */
var should = require('should');
var _ = require('lodash');
var path = require('path');
var commander = require(path.join(process.cwd(), 'bin', 'koan'));

describe('Program', function() {
  it('should have a command to display the version number', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('version');

    _.map(commander.options, function(option) {
      return option.short;
    }).should.containEql('-v');

    _.map(commander.options, function(option) {
      return option.long;
    }).should.containEql('--version');
    done();
  });

  it('should have a command to display the usage', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('help');
    done();
  });

  it('should have a command to generate a new application', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('new');
    done();
  });

  it('should have a command to start the application', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('start');
    done();
  });

  it('should have a command to generate a new controller', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('controller');
    done();
  });

  it('should have a command to generate a new model', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('model');
    done();
  });

  it('should have a command to generate a new RESTful resource', function(done) {
    _.map(commander.commands, function(command) {
      return command._name;
    }).should.containEql('resource');
    done();
  });
});
