'use strict';

/**
 * Dependencies
 */
var should = require('should');
var path = require('path');
var commander = require(path.join(process.cwd(), 'bin', 'koan'));

describe('Program', function() {
  describe('arguments', function() {
    it('should be normalized', function(done) {
      commander.parse(['node', 'test', 'command', '--UPPERCASE', '--lowercase']);
//      commander.args.should.eql(['--uppercase', 'mixed']);
    });
  });
});
