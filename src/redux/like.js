import { createSlice } from "@reduxjs/toolkit";

export const like = createSlice({
  name: "like",
  initialState: {
    value: [],
  },
  reducers: {
    addLike: (state, action) => {
      // let b =[]
      // if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      // } else {
      //   b.push(action.payload);
      // }
      // state.value.map((v) => {
      //   if (!v.includes(action.payload)) {
      //     state.value.push(v)
      //   } else {
      //     b.push(v)
      //   }
      // })
  // const b = like.value.map((v) => v.id)
      // let a = state.value.filter(v => {
        //  v.id !== action.payload.id && state.value.push(action.payload)
      // })
      // return state.value = [...a]
    },
    removeLike: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    }
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
