import { collectioncardconstants } from "../componentsContants/collection/collection";
import { cardfrank, collectioncardsport } from "../componentsContants/collection/collectionsport";
import { casualkids } from "../componentsContants/collection/kids/casualkids";
import { formalkids } from "../componentsContants/collection/kids/formalkids";
import { cytrusperfume } from "../componentsContants/collection/perfume/cytrusperfume";
import { narcoticperfume } from "../componentsContants/collection/perfume/narcoticperfume";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { hijabforhead } from "../componentsContants/collection/women/hijabhead";
import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";
import { coolhijab, cytrus, deodarants, floral, kidscasual, kidshijab, kidssmart, kidssport, kidssuits, spicy, stylehijab, wifehijab } from "../perfumepokertext";

export const pokerSliderPerfume = [
  {
    player: "spray",
    btn: ["Sprays&Deodarants", "Dezodarantlar", "Дезодоранты"],
    t: deodarants,
    l: perfumecollection,
  },
  {
    player: "floralscent",
    btn: ["Floral Scents", "Gulli Hidlar", "Цветочные Духи"],
    t: floral,
    l: cytrusperfume,
  },
  {
    player: "cytruscent",
    btn: ["Cytrus Scents", "Sitrus Hidlar", "Цитрусовые Духи"],
    t: cytrus,
    l: perfumecollection,
  },
  {
    player: "spicy",
    btn: ["Spicy Scents", "O'tkir Hidlar", "Пряные Духи"],
    t: spicy,
    l: narcoticperfume,
  },
];

export const pokerSliderWomen = [
  {
    player: "stylehijab",
    btn: ["Explore Styles", "Yangicha Dizaynlar", "Стили Xиджаба"],
    t: stylehijab,
    l: hijabstyleconstants,
  },
  {
    player: "coolhijab",
    btn: ["Latest Styles", "So'ngi Dizaynlar", "Последние стили"],
    t: coolhijab,
    l: hijabforhead,
  },
  {
    player: "kidshijab",
    btn: ["Explore Kids Hijab", "Bolalar Hijobi", "Детские коллекции"],
    t: kidshijab,
    l: hijabstyleconstants,
  },
  {
    player: "familyhijab",
    btn: ["For Married Women", "Erga Tekkanlarge", "Для замужних женщин"],
    t: wifehijab,
    l: hijabforhead,
  },
];



export const pokerSliderKids = [
  {
    player: "kidssuits",
    btn: ["Explore Kids Suits", "Bolalar Kastimlari", "Детские костюмы"],
    t: kidssuits,
    l: formalkids,
  },
  {
    player: "kidssmart",
    btn: ["Smart Clothes", "Chiroyli Kiyimlar", "Kрасивая одежда"],
    t: kidssmart,
    l: formalkids,
  },
  {
    player: "kidscasual",
    btn: ["Casual Clothes", "Ko'cha Kiyimlar", "Повседневная одежда"],
    t: kidscasual,
    l: casualkids,
  },
  {
    player: "kidssport",
    btn: ["Sport Clothes", "Sport Kiyimlar", "Спортивная одежда"],
    t: casualkids,
    l: cardfrank,
  },
];
