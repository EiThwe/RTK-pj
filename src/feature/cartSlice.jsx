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
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
        state.quantity++;
        state.totalAmount += payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      state.totalAmount = state.cart.reduce((pv, cv) => pv + cv.price, 0);
      state.quantity = state.quantity-payload.quantity;
    },
    increaseQuantity: (state, { payload }) => {
      // console.log(payload);
      const orgPrice = payload.price;
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id) {

          item.quantity++;
          item.price += orgPrice
          console.log(item.price)
          console.log(orgPrice)
        }
        return item;
      });
      state.quantity++
      state.totalAmount += payload.price;
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
