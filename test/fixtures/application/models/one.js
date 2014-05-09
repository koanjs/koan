var Schema = require('jugglingdb').Schema;

module.exports = {
  title: { type: String, length: 255 },
  content: { type: Schema.Text }
}
