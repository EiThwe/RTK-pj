import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cartSlice'
import counterSlice from '../feature/counterSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})