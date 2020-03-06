var mongoose = require('mongoose');
const Schema = mongoose.Schema;



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