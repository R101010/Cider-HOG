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
    bDay: Date,
    xDay: Date,
    quantity: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Yeast', yeastSchema);