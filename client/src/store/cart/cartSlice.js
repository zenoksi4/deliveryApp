import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";


export const createOrder = createAsyncThunk('CREATE_ORDER', async (order, thunkAPI) => {
    try {   
        return await cartService.createOrder(order)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        shopId: '',
        isLoading: false,
        message: '',
        errors: null,
        order: null
    },
    reducers: {
        addToCart: cartService.addToCart,
        changeCountProduct: cartService.changeCountProduct,
        deleteProductCart: cartService.deleteProductCart
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.order = null;
        });
    }
}); 

export const { addToCart, changeCountProduct, deleteProductCart } = cartSlice.actions;

export default cartSlice.reducer;