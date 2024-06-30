import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: { value: false },
    reducers: {
        toggleSearch: (state, action) => {
            state.value = !state.value;
            console.log(state, "state");
        }
        
    }
})
export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;