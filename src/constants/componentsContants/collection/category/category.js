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
  { c: ["casual", "kundalik", "повседневный"], l: collectioncardconstants },
  { c: ["suits", "kastyumlar", "костюмы"], l: cardfrank },
  { c: ["sport", "sport", "спорт"], l: collectioncardsport },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes },
  { c: ["women", "ayollar", "женщины"], l: hijabstyleconstants },
  { c: ["kids", "bolalar", "Дети"], l: casualkids },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection },
  { c: ["accessories", "aksesuarlar", "аксессуары"], l: accessoryConstants },
];

export const categoryForWomen = [
  { c: ["dresses", "ko'ylaklar", "платья"], l: hijabstyleconstants },
  { c: ["for head", "bosh kiyim", "для головы"], l: hijabforhead },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes },
  { c: ["men", "erkaklar", "Мужчины"], l: collectioncardconstants },
  { c: ["kids", "bolalar", "Дети"], l: casualkids },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection },
  { c: ["accessories", "aksesuarlar", "аксессуары"], l: accessoryConstants },
];

export const categoryForPErfumes = [
  { c: ["cytrus", "sitrusli", "цитрусовые"], l: cytrusperfume },
  { c: ["floral", "gulli", "цветочный"], l: perfumecollection },
  { c: ["narcotic", "narkotik", "наркотический"], l: narcoticperfume },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes },
  { c: ["women", "ayollar", "женщины"], l: hijabstyleconstants },
  { c: ["kids", "bolalar", "Дети"], l: casualkids },
  { c: ["accessories", "aksesuarlar", "аксессуары"], l: accessoryConstants },
];

export const categoryForKids = [
  { c: ["formal", "rasmiy", "формальный"], l: formalkids },
  { c: ["casual", "kundalik", "повседневный"], l: casualkids },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes },
  { c: ["men", "erkaklar", "Мужчины"], l: collectioncardconstants },
  { c: ["perfume", "atirlar", "духи"], l: perfumecollection },
  { c: ["accessories", "aksesuarlar", "аксессуары"], l: accessoryConstants },
];
