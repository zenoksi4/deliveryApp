
const addToCart = (state, action) => {
    const {product, shopId} = action.payload;
    state.cart.push(product);
    state.shopId = shopId;
}

const changeCountProduct = (state, action) => {
    const {_id, count} = action.payload;
    const product = state.cart.find((product) => product._id === _id);
    product.count = count;
}


const cartService = {
    addToCart,
    changeCountProduct
}

export default cartService;