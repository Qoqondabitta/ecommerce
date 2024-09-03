import { accessoryConstants } from "../componentsContants/collection/accessories/watches";
import { collectioncardconstants } from "../componentsContants/collection/collection";
import { cardfrank } from "../componentsContants/collection/collectionsport";
import { casualkids } from "../componentsContants/collection/kids/casualkids";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { shoes } from "../componentsContants/collection/shoes";
import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";

export const burgerInfo = [
  {
    title: ["Men", "Erkaklar Bo'limi", "Мужчины"],
    l: collectioncardconstants,
    urltopage: "/collection",
  },
  {
    title: ["Women", "Ayollar Bo'limi", "Женщины"],
    l: hijabstyleconstants,
    urltopage: "/collection",
  },
  {
    title: ["Kids", "Bolalar Bo'limi", "Дети"],
    l: casualkids,
    urltopage: "/collection",
  },
  {
    title: ["Fragrances", "Atirlar", "Духи"],
    l: perfumecollection,
    urltopage: "/collection",
  },
  {
    title: ["Accessories", "Aksesuarlar", "Aксессуары"],
    l: accessoryConstants,
    urltopage: "/collection",
  },
  { title: ["Account", "Akaunt", "Акаунт"], urltopage: "/account" },
  {
    title: ["Shoes", "Oyoq Kiyimlar", "Oбувь"],
    l: shoes,
    urltopage: "/collection",
  },
  {
    title: ["Top", "Tepa Kiyimlar", "Bepxний"],
    l: cardfrank,
    urltopage: "/collection",
  },
  { title: ["Job Offers", "Ish", "Вакансия"], urltopage: "/jobs" },
];
