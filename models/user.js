var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  ciders: [{
      type: Schema.Types.ObjectId, ref: 'Cider'
  }]
  
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);