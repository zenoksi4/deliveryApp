const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    productsCart: [{
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
    }]

});

module.exports = mongoose.model("cart", cartSchema)