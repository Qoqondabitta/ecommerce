import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
    name: "title",
    initialState: { value: "BOT" },
    reducers: {
      bottom: (state, action) => {
        state.value = "BOT";
      },
      shoe: (state, action) => {
        state.value = "SHOE";
      },
      top: (state, action) => {
        state.value = "TOP";
      },
    },
  });

export const { bottom, shoe, top } = titleSlice.actions;

export default titleSlice.reducer;
