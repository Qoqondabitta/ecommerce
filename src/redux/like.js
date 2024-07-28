import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

export const like = createSlice({
  name: "like",
  initialState: { value: [] },
  reducers: {
    addLike: (state, action) => {
      const exist = state.value.find((v) => v.id == action.payload.id);
      if (exist) {
        state.value.map((v) =>
          v.id == action.payload.id ? { ...v, id: v.id + 1 } : v
        );
      } else {
        state.value.push(action.payload);
      }
    },
    removeLike: (state, action) => {
      state.value = state.value.filter((v) => v.id !== action.payload.id);
    }
  },
});

export const { addLike, removeLike } = like.actions;

export default like.reducer;
