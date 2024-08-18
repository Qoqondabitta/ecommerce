import { collectioncardconstants } from "../componentsContants/collection/collection";
import { cardfrank, collectioncardsport } from "../componentsContants/collection/collectionsport";
import { cytrus, deodarants, floral, spicy } from "../perfumepokertext";
import { casual, classic, formal} from "../pokerTextSlider";

export const pokerSliderPerfume = [
  {
    player: "spray",
    btn: ["Sprays&Deodarants", "Dezodarantlar", "Дезодоранты"],
    t: deodarants,
    l: collectioncardsport,
  },
  {
    player: "floral",
    btn: ["Floral Scents", "Gulli Hidlar", "Цветочные Духи"],
    t: floral,
    l: cardfrank,
  },
  {
    player: "cytrus",
    btn: ["Cytrus Scents", "Sitrus Hidlar", "Цитрусовые Духи"],
    t: cytrus,
    l: collectioncardconstants,
  },
  {
    player: "spicy",
    btn: ["Spicy Scents", "O'tkir Hidlar", "Пряные Духи"],
    t: spicy,
    l: cardfrank,
  },
];

export const pokerSliderWomen = [
  {
    player: "head",
    btn: ["Sprays&Deodarants", "Dezodarantlar", "Дезодоранты"],
    t: deodarants,
    l: collectioncardsport,
  },
  {
    player: "top",
    btn: ["Floral Scents", "Gulli Hidlar", "Цветочные Духи"],
    t: floral,
    l: cardfrank,
  },
  {
    player: "bottom",
    btn: ["Cytrus Scents", "Sitrus Hidlar", "Цитрусовые Духи"],
    t: cytrus,
    l: collectioncardconstants,
  },
  {
    player: "feet",
    btn: ["Spicy Scents", "O'tkir Hidlar", "Пряные Духи"],
    t: spicy,
    l: cardfrank,
  },
];

