import { accessoryConstants } from "../componentsContants/collection/accessories/watches";
import { collectioncardconstants } from "../componentsContants/collection/collection";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { shoes } from "../componentsContants/collection/shoes";
import { hijabforhead } from "../componentsContants/collection/women/hijabhead";
import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";
import {casualkids} from "../componentsContants/collection/kids/casualkids"
import { cardfrank } from "../componentsContants/collection/collectionsport";

export const searchDropListconstants = [
  {
    h: ["Men Collection", "Erkaklar Koleksiyasi", "Мужчина Коллекция"],
    l: [
      { n: ["Bags", "Sumkalar", "Сумки"], d: collectioncardconstants },
      { n: ["Shoes", "Oyoq Kiyimlar", "Обувь"], d: shoes },
      { n: ["Clothes", "Kiyimlar", "Одежда"], d: collectioncardconstants },
      { n: ["Accessories", "Qo'shimcha", "Аксессуары"], d: accessoryConstants },
    ],
  },
  {
    h: ["Women Collection", "Ayollar Koleksiyasi", "Женщины Коллекция"],
    l: [
      { n: ["Perfumes", "Atirlar", "Парфюмерия"], d: perfumecollection },
      { n: ["Handbags", "Sumkalar", "Сумки"], d: collectioncardconstants },
      { n: ["Clothes", "Ko'ylaklar", "Одежда"], d: hijabstyleconstants },
      { n: ["Hats", "Boshkiyimlar", "Головные уборы"], d: hijabforhead },
      { n: ["Shoes", "Oyoq Kiyimlar", "Обувь"], d: shoes },
    ],
  },
  {
    h: ["Kids Collection", "Bolalar Koleksiyasi", "Дети Коллекция"],
    l: [
      { n: ["Bags", "Sumkalar", "Сумки"], d: collectioncardconstants },
      { n: ["Shoes", "Oyoq Kiyimlar", "Обувь"], d: shoes },
      { n: ["Clothes", "Ko'ylaklar", "Одежда"], d: casualkids },
    ],
  },
];

export const searchDropMedia = [
  { p: ["Hijab", "Hijob", "Hijab"], d: hijabstyleconstants },
  { p: ["Handbags", "Sumkalar", "Сумки"], d: collectioncardconstants },
  { p: ["T-Shirts", "Futbolkalar", "Одежда"], d: collectioncardconstants },
  { p: ["Shirts", "Ko'ylaklar", "Рубашки"], d: cardfrank },
  { p: ["Watches", "Soatlar", "Часы"], d: accessoryConstants },
  { p: ["Suits", "Kastyumlar", "Костюмы"], d: cardfrank },
  { p: ["Shoes", "Oyoq Kiyimlar", "Обувь"], d: shoes },
];
