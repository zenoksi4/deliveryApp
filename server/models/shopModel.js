const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        lat:{
            type: Number,
            required: true
        },
        lng:{
            type: Number,
            required: true
        }
    },
    products: [{
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
        }
    }]

});

module.exports = mongoose.model("shop", shopSchema)