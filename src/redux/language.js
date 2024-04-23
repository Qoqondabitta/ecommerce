import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: { value: "ENG" },
  // console.log();
  reducers: {
    english: (state, action) => {
      state.value = "ENG";
    },
    uzbek: (state, action) => {
      state.value = "UZB";
    },
    russian: (state, action) => {
      state.value = "RUS";
    },
  },
});

export const { english, uzbek, russian } = languageSlice.actions;

export default languageSlice.reducer;
