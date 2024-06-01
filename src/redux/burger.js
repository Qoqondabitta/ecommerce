import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
    name: "burger",
    initialState: { value: false },
    reducers: {
        toggleBurger: (state, action) => {
            state.value = !state.value;
            console.log(state, "state");
        }
        
    }
})
export const { toggleBurger } = burgerSlice.actions;

export default burgerSlice.reducer