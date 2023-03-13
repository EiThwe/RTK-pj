import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 10,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementByTen: (state, {payload}) => {
        state.count += payload;
      },
      incrementByOne: (state, {payload}) => {
        state.count += 1;
      },
  },
});
export const { increment, incrementByAmount,incrementByTen,incrementByOne } = counterSlice.actions;

export default counterSlice.reducer;
