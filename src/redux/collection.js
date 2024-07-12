import { createSlice } from "@reduxjs/toolkit";
import { collectioncardconstants } from "../constants/componentsContants/collection/collection";

export const collection = createSlice({
  name: "collection",
  initialState: { value: collectioncardconstants },
  reducers: {
    changeCollection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCollection } = collection.actions

export default collection.reducer