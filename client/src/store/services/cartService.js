
const addToCart = (state, action) => {
    const product = action.payload;
    state.cart.push(product);
}


const cartService = {
    addToCart
}

export default cartService;