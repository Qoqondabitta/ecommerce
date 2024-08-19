import { collectioncardconstants } from "../componentsContants/collection/collection";
import { cardfrank, collectioncardsport } from "../componentsContants/collection/collectionsport";
import { coolhijab, cytrus, deodarants, floral, kidscasual, kidshijab, kidssmart, kidssport, kidssuits, spicy, stylehijab, wifehijab } from "../perfumepokertext";
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
    player: "stylehijab",
    btn: ["Explore Styles", "Yangicha Dizaynlar", "Стили Xиджаба"],
    t: stylehijab,
    l: collectioncardsport,
  },
  {
    player: "coolhijab",
    btn: ["Latest Styles", "So'ngi Dizaynlar", "Последние стили"],
    t: coolhijab,
    l: cardfrank,
  },
  {
    player: "kidshijab",
    btn: ["Explore Kids Hijab", "Bolalar Hijobi", "Детские коллекции"],
    t: kidshijab,
    l: collectioncardconstants,
  },
  {
    player: "familyhijab",
    btn: ["For Married Women", "Erga Tekkanlarge", "Для замужних женщин"],
    t: wifehijab,
    l: cardfrank,
  },
];



export const pokerSliderKids = [
  {
    player: "kidssuits",
    btn: ["Explore Kids Suits", "Bolalar Kastimlari", "Детские костюмы"],
    t: kidssuits,
    l: collectioncardsport,
  },
  {
    player: "kidssmart",
    btn: ["Smart Clothes", "Chiroyli Kiyimlar", "Kрасивая одежда"],
    t: kidssmart,
    l: cardfrank,
  },
  {
    player: "kidscasual",
    btn: ["Casual Clothes", "Ko'cha Kiyimlar", "Повседневная одежда"],
    t: kidscasual,
    l: collectioncardconstants,
  },
  {
    player: "kidssport",
    btn: ["Sport Clothes", "Sport Kiyimlar", "Спортивная одежда"],
    t: kidssport,
    l: cardfrank,
  },
];
