'use strict';

module.exports = {
  home: function *(next) {
    this.body = yield app.render('home');
  }
};
