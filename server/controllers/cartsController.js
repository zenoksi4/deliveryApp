const Cart = require('../models/cartModel');

const createCart = async (req, res) => {

    try {

        const cart = req.body;
        
        const cartCreated = await Cart.create(cart);
        
        res.status(201).json(cartCreated);
    } catch (error) {
        res.status(500).json({ message: `Failed to create cart, please try again. error: ${error} `});
    }
};

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: `Failed to get cart, please try again. error: ${error}`});
    }
};

module.exports = {
    createCart,
    getCart
}