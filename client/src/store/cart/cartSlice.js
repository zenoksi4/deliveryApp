import { createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        shopId: ''
    },
    reducers: {
        addToCart: cartService.addToCart,
        changeCountProduct: cartService.changeCountProduct
    }
}); 

export const { addToCart, changeCountProduct } = cartSlice.actions;

export default cartSlice.reducer;