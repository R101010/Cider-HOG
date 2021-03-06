var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  }
}, {
  timestamps: true
});

var ciderSchema = new Schema({
  brewName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  source: String,
  price: Number,
  dueDate: Date,
  bDate: Date,
  xDate: Date,
  size: Number,
  organic: { type: Boolean, default: false },
  reviews: [reviewSchema],
  brew: [{
    type: Schema.Types.ObjectId,
    ref: 'Yeast'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Cider', ciderSchema);