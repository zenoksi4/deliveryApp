import axios from "axios";

const proxy = process.env.REACT_APP_PROXY

const addToCart = (state, action) => {
    const {product, shopId} = action.payload;
    state.cart.push(product);
    state.shopId = shopId;
}

const deleteProductCart = (state, action) => {
    const _id = action.payload;
    const index = state.cart.findIndex(prod => prod._id === _id)
    if (index > -1) {
        state.cart.splice(index, 1);
    }
    if (state.cart.length < 0){
        state.shopId = ''
    }
}

const changeCountProduct = (state, action) => {
    const {_id, count} = action.payload;
    const product = state.cart.find((product) => product._id === _id);
    product.count = count;
}

const createOrder = async (order) => {
    const response = await axios.post(`${proxy}/cart`, order);

    return response.data;
}

const cartService = {
    addToCart,
    changeCountProduct,
    createOrder,
    deleteProductCart
}

export default cartService;