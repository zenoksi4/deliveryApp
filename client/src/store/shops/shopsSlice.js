import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopsService from "../services/shopsService";


export const getShops = createAsyncThunk('GET_SHOPS', async(_, thunkAPI) => {
    try {
        return await shopsService.getShops();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const shopsSlice = createSlice({
    name: 'shops',
    initialState: {
        shops: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getShops.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getShops.fulfilled, (state, action) => {
            state.isLoading = false;
            state.shops = action.payload
        });

        builder.addCase(getShops.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.shops = null;
        });
    }
}); 

export default shopsSlice.reducer;