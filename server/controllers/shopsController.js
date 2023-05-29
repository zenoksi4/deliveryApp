const Shop = require('../models/shopModel');

const createShop = async (req, res) => {

    try {

        const shop = req.body;
        const shopCreated = await Shop.create(shop);
        
        res.status(201).json(shopCreated);
    } catch (error) {
        res.status(500).json({ message: `Failed to create shop, please try again. error: ${error} `});
    }
};

const getShop = async (req, res) => {
    try {
        const shop = await Shop.find();

        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ message: `Failed to get shop, please try again. error: ${error}`});
    }
};

const createProductsByShopId = async (req, res) => {
    try {

        const shopId = req.params.id; 
        const { products } = req.body;

        const updatedShop = await Shop.findByIdAndUpdate(
            { _id: shopId }, 
            { $push: { 
                products: { $each: products }
            } },
            { new: true }
          );
        
        res.status(201).json(updatedShop);
    } catch (error) {
        res.status(500).json({ message: `Failed to create products, please try again. error: ${error} `});
    }
};


module.exports = {
    createShop,
    getShop,
    createProductsByShopId,
}