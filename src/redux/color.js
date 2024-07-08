import { createSlice } from "@reduxjs/toolkit";

export const color = createSlice({
    name: "color",
    initialState: { value: "black" },
    reducres: {
        setColor: (state, action) => {
            state.value=="black"?state.value="red":state.value="black"
        }
    }
})

export const { setColor } = color.actions

export default color.reducer