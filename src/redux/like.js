import { createSlice } from "@reduxjs/toolkit";
// import main from "../assets/images/backgrounds/main.jpg";
import top12 from "../assets/images/bottomCard/bottom9.jpg";

export const like = createSlice({
  name: "like",
  initialState: {
    value: [],
  },
  reducers: {
    addLike: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.value.findIndex(
        (item) => item.productId === productId
      );
      if (index >= 0) {
        state.value[index].quantity += quantity;
      } else {
        state.value.push({ productId, quantity });
      }
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
