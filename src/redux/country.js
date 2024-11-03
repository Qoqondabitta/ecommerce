import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countrySlice",
  initialState: { value: false },
  reducers: {
    toggleCountry: (state, action) => {
      state.value = !state.value;
      console.log(state, "state");  
    },
  },
});
export const { toggleCountry } = countrySlice.actions;

export default countrySlice.reducer;
