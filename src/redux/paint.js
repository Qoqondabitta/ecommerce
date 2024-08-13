import { createSlice } from "@reduxjs/toolkit";

export const paint = createSlice({
  name: "paint",
  initialState: { value: "black" },
  reducers: {
    setPaint: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPaint } = paint.actions;
export default paint.reducer;
