'use strict';

module.exports = {
  about: function *(next) {
    this.body = yield app.render('pages/about', {}, 'another-layout');
  }
};
