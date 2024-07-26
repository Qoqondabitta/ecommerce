import { createSlice } from "@reduxjs/toolkit";
import {produce} from "immer"

export const like = createSlice({
  name: "like",
  initialState: { value: [] },
  reducers: {
    addLike: (state, action) => {
      state.value.push(action.payload)
    },
  },
});

// export const { addLike, changeLike, removeLike } = like.actions;
export const { addLike } = like.actions;

export default like.reducer;
      // const exist = state.value.find((v) => v.id == res.id);
      // if (exist) {
      //   return state.value.map((v) =>
      //     v.id == res.id ? { ...v, id: v.id + 1 } : v
      //   );
      // } else {
      //   return state.value.push(action.payload);
      // }