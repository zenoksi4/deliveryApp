const express = require('express');
const router = express.Router();
const { createCart, getCart } = require('../controllers/cartsController')


router.post('/', createCart)

router.get('/', getCart)


module.exports = router;