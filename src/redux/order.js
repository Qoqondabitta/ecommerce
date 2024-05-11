import { createSlice } from "@reduxjs/toolkit";

export const order = createSlice({
  name: "order",
  initialState: { value: 1 },
  reducers: {
    increment: (state, action) => {
      if (state.value == 3) {
        state.value = 0;
      } else {
        state.value += 1;
      }
    },
    decrement: (state, action) => {
      if (state.value == 0) {
        state.value = 3;
      } else {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = order.actions;

export default order.reducer;
