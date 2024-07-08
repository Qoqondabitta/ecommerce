import { createSlice } from "@reduxjs/toolkit";
// import main from "../assets/images/backgrounds/main.jpg";
import top12 from "../assets/images/bottomCard/bottom9.jpg";


export const like = createSlice({
  name: "like",
  initialState: {
    value: [
      {
        id: 1,
        title: ["Sneakers", "Sneakers", "Sneakers"],
        desc: ["summer", "summer", "summer"],
        img: top12,
        price: "123$",
        // move: "",
        color: "black",
      },
    ],
  },
  reducers: {
    addLike: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
