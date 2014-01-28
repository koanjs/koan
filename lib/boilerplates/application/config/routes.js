module.exports = {
  '/': function *() {
    this.body = yield app.render('home');
  }
}
