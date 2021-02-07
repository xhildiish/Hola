const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
})

module.exports = Item = mongoose.model('item', 'ItemSchema')
