import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quantity: 0,
  totalAmount: 0,
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // state.cart.push(payload) ,
      const isExist = state.cart.find((item) => item.id === payload.id);
      if (isExist) {
        return state;
      } else {
        state.cart = [
          ...state.cart,
          { ...payload, quantity: 1, totalPrice: payload.price },
        ];
        state.quantity++;
        state.totalAmount += payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      state.totalAmount = state.cart.reduce((pv, cv) => pv + cv.totalPrice, 0);
      state.quantity -= payload.quantity;
    },
    increaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item.quantity++;
          item.totalPrice += payload.price;
          state.quantity++;
          state.totalAmount += payload.price;
        }
        return item;
      });
    },
    decreaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id && payload.quantity > 1) {
          item.quantity--;
          item.totalPrice -= payload.price;
          state.quantity--;
          state.totalAmount -= payload.price;
        }
        return item;
      });
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
