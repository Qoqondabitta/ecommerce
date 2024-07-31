import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

export const cart = createSlice({
  name: "cart",
  initialState: { value: [] },
  reducers: {
    addToCart: (state, action) => {
      const exist = state.value.find((v) => v.id == action.payload.id);
      if (exist) {
        state.value.map((v) =>
          v.id == action.payload.id ? { ...v, id: v.id + 1 } : v
        );
      } else {
        state.value.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.value = state.value.filter((v) => v.id !== action.payload.id);
    }
  },
});

export const { addToCart, deleteFromCart } = cart.actions;

export default cart.reducer;
