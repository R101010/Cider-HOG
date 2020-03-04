var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const yeastSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    source: String,
    price: Number,
    bDate: Date,
    xDate: Date,
    quantity: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Yeast', yeastSchema);