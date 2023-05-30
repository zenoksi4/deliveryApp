import { createSlice } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
    name: 'shops',
    initialState: {
        shops: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default shopsSlice.reducer;