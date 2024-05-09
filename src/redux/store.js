import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";
import order from "./order";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
    order,
  },
});
// console.log(store.language);
