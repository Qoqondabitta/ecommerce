import { collectioncardconstants } from "../componentsContants/collection/collection";
import { casualkids } from "../componentsContants/collection/kids/casualkids";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";

export const burgerInfo = [
  { title: ["Men", "Erkaklar Bo'limi", "Мужчины"], l: collectioncardconstants },
  { title: ["Women", "Ayollar Bo'limi", "Женщины"], l: hijabstyleconstants },
  { title: ["Kids", "Bolalar Bo'limi", "Дети"], l: casualkids },
  { title: ["Fragrances", "Atirlar", "Духи"], l: perfumecollection },
  { title: ["Accessories", "Aksesuarlar", "Aксессуары"] },
  { title: ["Account", "Akaunt", "Акаунт"], urltopage: "/account" },
  { title: ["Bottom", "Aksesuarlar", "Hижний"] },
  { title: ["Top", "Aksesuarlar", "Bepxний"] },
  { title: ["Products", "Maxsulotlar", "Продукты"] },
];