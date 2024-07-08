import { createSlice } from "@reduxjs/toolkit";

export const like = createSlice({
  name: "like",
  initialState: { value: [] },
  reducers: {
    addLike: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
