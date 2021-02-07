const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//create schema

const ModelsSchema = new Schema({
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

module.exports = Models = mongoose.model('models', 'ModelsSchema')
