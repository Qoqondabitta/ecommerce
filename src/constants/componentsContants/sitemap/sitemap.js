import { accessoryConstants } from "../collection/accessories/watches";
import {
  collectioncardconstants,
  kidscollection,
} from "../collection/collection";
import { cardfrank } from "../collection/collectionsport";
import { perfumecollection } from "../collection/perfume/perfumecollection";
import { shoes } from "../collection/shoes";
import { hijabforhead } from "../collection/women/hijabhead";
import { hijabstyleconstants } from "../collection/women/stylehijab";

export const sitemapUrls = [
  {
    mt: ["Men", "Erkaklarga", "МУЖСКОЙ"],
    l: [
      {
        h: ["Shoes", "Oyoq Kiyimlar", "Обуви"],
        li: [
          { st: ["Sneakers", "Krasovkalar", "Кроссовки"], ic: shoes },
          { st: ["Shoes", "Tufli", "Туфли"], ic: shoes },
          { st: ["Sandals", "Tapochkalar", "Тапочки"], ic: shoes },
        ],
      },
      {
        h: ["Clothing", "Kiyimlar", "Одежда"],
        li: [
          {
            ic: collectioncardconstants,
            st: ["T-Shirts", "Futbolkalar", "Футболки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Shirts", "Ko'ylaklar", "Рубашки"],
          },
          { ic: cardfrank, st: ["Suits", "Kostyumlar", "Костюмы"] },
          { ic: collectioncardconstants, st: ["Pants", "Shimlar", "Брюки"] },
          {
            ic: collectioncardconstants,
            st: ["Tracksuits", "Sport Kiyimlar", "Спортивки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Caps", "Bosh Kiyimlar", "Кепки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Shorts", "Shortiklar", "Шорты"],
          },
          {
            ic: collectioncardconstants,
            st: ["Sport Pants", "Shalvarlar", "Трико"],
          },
        ],
      },
      {
        h: ["Accessories", "Qo'shimchalar", "Аксессуары"],
        li: [
          {
            ic: perfumecollection,
            st: ["Cytrus Perfumes", "Sitrus Atirlar", "Цитрусовые духи"],
          },
          {
            ic: perfumecollection,
            st: ["Narcotic Perfumes", "Narkotik Atirlar", "Наркотические духи"],
          },
          {
            ic: perfumecollection,
            st: ["Floral Perfumes", "Gullik Atirlar", "Цветочные духи"],
          },
          {
            ic: collectioncardconstants,
            st: ["Tie/Bow Tie", "Bo'yinbig'lar", "Галстук/Бабочка"],
          },
          { ic: accessoryConstants, st: ["Watches", "Qo'l Soatlar", "Часы"] },
        ],
      },
    ],
  },
  {
    mt: ["Women", "Ayollarga", "Женский"],
    l: [
      {
        h: ["Shoes", "Oyoq Kiyimlar", "Обуви"],
        li: [
          { st: ["Sneakers", "Krasovkalar", "Кроссовки"], ic: shoes },
          { st: ["Sandals", "Tapochkalar", "Тапочки"], ic: shoes },
        ],
      },
      {
        h: ["Clothing", "Kiyimlar", "Одежда"],
        li: [
          {
            ic: hijabforhead,
            st: ["Hijab For Head", "Bosh Uchun Hijoblar", "Хиджаб для головы"],
          },
          {
            ic: hijabstyleconstants,
            st: ["Hijab Clothings", "Hijob Jiyimlar", "Хиджаб Одежда"],
          },
        ],
      },
      {
        h: ["Accessories", "Qo'shimchalar", "Аксессуары"],
        li: [
          {
            ic: perfumecollection,
            st: ["Cytrus Perfumes", "Sitrus Atirlar", "Цитрусовые духи"],
          },
          {
            ic: perfumecollection,
            st: ["Narcotic Perfumes", "Narkotik Atirlar", "Наркотические духи"],
          },
          {
            ic: perfumecollection,
            st: ["Floral Perfumes", "Gullik Atirlar", "Цветочные духи"],
          },
          { ic: accessoryConstants, st: ["Watches", "Qo'l Soatlar", "Часы"] },
        ],
      },
    ],
  },
  {
    mt: ["Kids", "Bolalarga", "Детский"],
    l: [
      {
        h: ["Shoes", "Oyoq Kiyimlar", "Обуви"],
        li: [
          { st: ["Sneakers", "Krasovkalar", "Кроссовки"], ic: shoes },
          { st: ["Sandals", "Tapochkalar", "Тапочки"], ic: shoes },
        ],
      },
      {
        h: ["Clothing", "Kiyimlar", "Одежда"],
        li: [
          {
            ic: kidscollection,
            st: ["T-Shirts", "Futbolkalar", "Футболки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Shirts", "Ko'ylaklar", "Рубашки"],
          },
          { ic: cardfrank, st: ["Suits", "Kostyumlar", "Костюмы"] },
          { ic: kidscollection, st: ["Pants", "Shimlar", "Брюки"] },
          {
            ic: collectioncardconstants,
            st: ["Tracksuits", "Sport Kiyimlar", "Спортивки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Caps", "Bosh Kiyimlar", "Кепки"],
          },
          {
            ic: collectioncardconstants,
            st: ["Shorts", "Shortiklar", "Шорты"],
          },
          {
            ic: kidscollection,
            st: ["Sport Pants", "Shalvarlar", "Трико"],
          },
        ],
      },
      {
        h: ["Accessories", "Qo'shimchalar", "Аксессуары"],
        li: [
          {
            ic: collectioncardconstants,
            st: ["Bags", "Sumkalar", "Сумки"],
          },
        ],
      },
    ],
  },
];

export default sitemapUrls