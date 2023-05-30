import { configureStore } from '@reduxjs/toolkit'
import shopsSlice from './shops/shopsSlice'

export const store = configureStore(({
    reducer: {
        shops: shopsSlice
    }
}))