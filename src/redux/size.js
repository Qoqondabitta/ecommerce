import { createSlice } from "@reduxjs/toolkit";

export const size = createSlice({
  name: "size",
  initialState: { value: "M" },
  reducers: {
    setSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSize } = size.actions;
export default size.reducer;
