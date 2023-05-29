const express = require('express');
const router = express.Router();
const { getShop, createShop, createProductsByShopId } = require('../controllers/shopsController')


router.get('/', getShop)

router.post('/', createShop)

router.put('/products/:id', createProductsByShopId)



module.exports = router;