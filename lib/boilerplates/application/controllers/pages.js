'use strict';

module.exports = {
  about: function *() {
    this.body = yield app.render('pages/about');
  }
};
