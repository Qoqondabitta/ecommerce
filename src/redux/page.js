import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "page",
  initialState: { value: "home" },
  reducers: {
    changePage: (state, action) => {
          state.value = action.payload;
        //   console.log();
    },
  },
});

export const { changePage } = page.actions;

export default page.reducer;
