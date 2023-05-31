import { createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: cartService.addToCart
    }
}); 

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;