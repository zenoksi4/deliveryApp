import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";


export const createOrder = createAsyncThunk('CREATE_ORDER', async (order, thunkAPI) => {
    try {   
        return await cartService.createOrder(order);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

export const getOrdersByEmail = createAsyncThunk('GET_ORDER', async (email, thunkAPI) => {
    try {   
        return await cartService.getOrdersByEmail(email);
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
        orders: null
    },
    reducers: {
        addToCart: cartService.addToCart,
        changeCountProduct: cartService.changeCountProduct,
        deleteProductCart: cartService.deleteProductCart,
        clearCart: cartService.clearCart
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;

        });

        builder.addCase(getOrdersByEmail.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getOrdersByEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        });
        builder.addCase(getOrdersByEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.orders = null;
        });
    }
}); 

export const { addToCart, changeCountProduct, deleteProductCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;