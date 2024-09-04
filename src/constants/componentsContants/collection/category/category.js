import { accessoryConstants } from "../accessories/watches";
import { collectioncardconstants } from "../collection";
import { cardfrank, collectioncardsport } from "../collectionsport";
import { casualkids } from "../kids/casualkids";
import { formalkids } from "../kids/formalkids";
import { cytrusperfume } from "../perfume/cytrusperfume";
import { narcoticperfume } from "../perfume/narcoticperfume";
import { perfumecollection } from "../perfume/perfumecollection";
import { shoes } from "../shoes";
import { hijabforhead } from "../women/hijabhead";
import { hijabstyleconstants } from "../women/stylehijab";

export const category = [
  {
    c: ["casual", "kundalik", "повседневный"],
    l: collectioncardconstants,
    turn: 1,
  },
  { c: ["suits", "kastyumlar", "костюмы"], l: cardfrank, turn: 1 },
  { c: ["sport", "sport", "спорт"], l: collectioncardsport, turn: 1 },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes, turn: 1 },
  { c: ["women", "ayollar", "женщины"], l: hijabstyleconstants, turn: 0 },
  { c: ["kids", "bolalar", "Дети"], l: casualkids, turn: 2 },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection, turn: 3 },
  {
    c: ["accessories", "aksesuarlar", "аксессуары"],
    l: accessoryConstants,
    turn: 1,
  },
];

export const categoryForWomen = [
  { c: ["dresses", "ko'ylaklar", "платья"], l: hijabstyleconstants, turn: 0 },
  { c: ["for head", "bosh kiyim", "для головы"], l: hijabforhead, turn: 0 },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes, turn: 0 },
  { c: ["men", "erkaklar", "Мужчины"], l: collectioncardconstants, turn: 1 },
  { c: ["kids", "bolalar", "Дети"], l: casualkids, turn: 2 },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection, turn: 3 },
  {
    c: ["accessories", "aksesuarlar", "аксессуары"],
    l: accessoryConstants,
    turn: 1,
  },
];

export const categoryForPErfumes = [
  { c: ["cytrus", "sitrusli", "цитрусовые"], l: perfumecollection, turn: 3 },
  { c: ["floral", "gulli", "цветочный"], l: cytrusperfume, turn: 3 },
  { c: ["narcotic", "narkotik", "наркотический"], l: narcoticperfume, turn: 3 },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes, turn: 1 },
  { c: ["women", "ayollar", "женщины"], l: hijabstyleconstants, turn: 0 },
  { c: ["kids", "bolalar", "Дети"], l: casualkids, turn: 2 },
  {
    c: ["accessories", "aksesuarlar", "аксессуары"],
    l: accessoryConstants,
    turn: 1,
  },
];

export const categoryForKids = [
  { c: ["formal", "rasmiy", "формальный"], l: formalkids, turn: 2 },
  { c: ["casual", "kundalik", "повседневный"], l: casualkids, turn: 2 },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes, turn: 1 },
  { c: ["men", "erkaklar", "Мужчины"], l: collectioncardconstants, turn: 1 },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection, turn: 0 },
  {
    c: ["accessories", "aksesuarlar", "аксессуары"],
    l: accessoryConstants,
    turn: 1,
  },
];
