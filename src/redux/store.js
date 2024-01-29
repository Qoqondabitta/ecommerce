import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter"
import language from "./language"

export const store = configureStore({
reducer: {
    counter,
    language,
}
})
// console.log(store.language);