import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 1 },
  reducers: {
    increment: (state, action) => {
      state.data += 1;
    },
    decrement: (state, action) => {
      state.data -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
