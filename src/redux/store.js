import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
  },
});
// console.log(store.language);
