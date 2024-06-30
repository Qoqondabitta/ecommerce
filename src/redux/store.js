import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";
import order from "./order";
import burger from "./burger";
import search from "./search";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
    order,
    burger,
    search
  },
});
// console.log(store.language);
