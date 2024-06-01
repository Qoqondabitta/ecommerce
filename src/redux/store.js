import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";
import order from "./order";
import burger from "./burger";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
    order,
    burger
  },
});
// console.log(store.language);
