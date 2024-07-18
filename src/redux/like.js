import { createSlice } from "@reduxjs/toolkit";

export const like = createSlice({
  name: "like",
  initialState: {
    value: [],
  },
  reducers: {
    addLike: (state, action) => {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter((item) => item !== action.payload);
      }
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
// const { productId, quantity, bg, f, s } = action.payload;
// const index = state.value.findIndex(
//   (item) => item.id === productId
// );
// if (index >= 0) {
//   state.value[index].quantity += quantity;
// } else {
//   state.value.push({ productId, quantity, bg, f, s });
// }
