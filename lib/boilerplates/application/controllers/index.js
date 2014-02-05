'use strict';

module.exports = {
  home: function *() {
    this.body = yield app.render('home');
  }
}
