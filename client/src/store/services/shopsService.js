import axios from 'axios'

const getShops = async () => {
    const shops = await axios.get('/shop');

    return shops.data;
}

const cartService = {
    getShops
}

export default cartService;