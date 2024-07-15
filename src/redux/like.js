import { createSlice } from "@reduxjs/toolkit";
// import main from "../assets/images/backgrounds/main.jpg";
import top12 from "../assets/images/bottomCard/bottom9.jpg";

export const like = createSlice({
  name: "like",
  initialState: {
    value: "",
  },
  reducers: {
    addLike: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
