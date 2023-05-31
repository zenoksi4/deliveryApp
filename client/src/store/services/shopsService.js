import axios from 'axios'
const proxy = 'http://localhost:5000/api'
const getShops = async () => {
    const shops = await axios.get(`${proxy}/shop`);

    return shops.data;
}

const cartService = {
    getShops
}

export default cartService;