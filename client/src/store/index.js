import { configureStore } from '@reduxjs/toolkit'
import shopsSlice from './shops/shopsSlice'
import cartSlice from './cart/cartSlice'

export const store = configureStore(({
    reducer: {
        shops: shopsSlice,
        cart: cartSlice
    }
}))