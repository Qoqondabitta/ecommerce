import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter"

export const store = configureStore({
reducer: {
    counter,
}
})