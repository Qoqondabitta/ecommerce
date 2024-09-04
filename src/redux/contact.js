import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState: { value: false },
  reducers: {
    toggleContact: (state, action) => {
      state.value = !state.value;
      console.log(state, "state");
    },
  },
});
export const { toggleContact } = contactSlice.actions;

export default contactSlice.reducer;
