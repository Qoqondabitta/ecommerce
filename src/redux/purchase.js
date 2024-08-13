import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

export const purchase = createSlice({
  name: "purchase",
  initialState: { value: [] },
  reducers: {
    addPurchase: (state, action) => {
      const exist = state.value.find((v) => v.id == action.payload.id);
      if (exist) {
        state.value.map((v) =>
          v.id == action.payload.id ? { ...v, id: v.id + 1 } : v
        );
      } else {
        state.value.push(action.payload);
      }
    },
    removePurchase: (state, action) => {
      state.value = state.value.filter((v) => v.id !== action.payload.id);
    }
  },
});

export const { addPurchase, removePurchase } = purchase.actions;

export default purchase.reducer;
