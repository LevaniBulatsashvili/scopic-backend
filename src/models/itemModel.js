const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required'],
        trim: true
    },
    summary: {
        type: String,
        required: [true, 'Summary is required'],
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    highestBidder: {
        type: String,
        default: '',
        trim: true
    },
    endsIn: {
        type: Date,
        required: [true, 'Date is required'],
    },
    bidHistory: {
        type: Array,
        default: []
    }
}) 

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
