'use strict';

module.exports = {
  index: function *(next) {
    this.body = '/test/index';
  },
  test: function *(next) {
    this.body = '/test/test';
  }
};
