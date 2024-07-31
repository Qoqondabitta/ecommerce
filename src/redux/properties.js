import { createSlice } from "@reduxjs/toolkit";

export const properties = createSlice({
    name: "properties",
    initialState: { data: "like" },
    reducers: {
        changeProperty: (state, action) => { 
            state.data = action.payload;
        }
    }
})

export const { changeProperty } = properties.actions

export default properties.reducer