import { createSlice } from "@reduxjs/toolkit";

export const like = createSlice({
  name: "like",
  initialState: {
    value: [],
  },
  reducers: {
    addLike: (state, action) => {
      const res = action.payload.map(v=>v);
      const exist = state.value.find((v) => v.id == res.id);
      if (exist) {
        return state.value.map((v) =>
          v.id == res.id ? { ...v, qty: v.qty + 1 } : v
        );
      } else {
        // const res = action.payload.map((v) => v);
        const res = action.payload;
        // return state.value.push(res)
        return [...state.value, { ...res, qty: 1 }];
      }
    },
    removeLike: (state, action) => {
      const exist1 = state.find((v) => v.id === action.payload.id);
      if (exist1.qty === 1) {
        return state.filter((v) => v.id !== exist1.id);
      } else {
        return state.map((v) =>
          v.id === action.payload.id ? { ...v, qty: v.qty - 1 } : v
        );
      }
    },
    changeLike: (state, action) => {},
  },
});

export const { addLike, changeLike, removeLike } = like.actions;

export default like.reducer;
