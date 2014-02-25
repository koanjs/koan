'use strict';

module.exports = {
  index: function *(next) {
    this.body = '/index/index';
  },
  test: function *(next) {
    this.body = '/index/test';
  }
};
