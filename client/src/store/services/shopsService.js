import axios from 'axios'
const proxy = process.env.REACT_APP_PROXY
const getShops = async () => {
    const shops = await axios.get(`${proxy}/shop`);

    return shops.data;
}

const cartService = {
    getShops
}

export default cartService;