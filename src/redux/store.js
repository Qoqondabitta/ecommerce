import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";
import order from "./order";
import burger from "./burger";
import search from "./search";
import page from "./page";
import like from "./like";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
    order,
    burger,
    search,
    page,
    like
  },
});
// console.log(store.language);
