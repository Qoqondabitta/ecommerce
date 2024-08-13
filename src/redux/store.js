import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import language from "./language";
import title from "./title";
import order from "./order";
import burger from "./burger";
import search from "./search";
import page from "./page";
import like from "./like";
import collection from "./collection";
import cart from "./cart";
import properties from "./properties";
import purchase from "./purchase";
import size from "./size";
import paint from "./paint";

export const store = configureStore({
  reducer: {
    counter,
    language,
    title,
    order,
    burger,
    search,
    page,
    like,
    collection,
    cart,
    properties,
    purchase,
    size,
    paint,
  },
});
// console.log(store.language);
