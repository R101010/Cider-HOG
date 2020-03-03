var mongoose = require('mongoose');
// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var factSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var ciderSchema = new mongoose.Schema({
  name: String,
  source: String,
  price: String,
  purchase date: String,
  exp. date: String,
  Organic: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Cider', ciderSchema);