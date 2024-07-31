import { collectioncardconstants } from "../componentsContants/collection/collection";
import { cardfrank, collectioncardsport } from "../componentsContants/collection/collectionsport";
// import { collectioncardsuits } from "../componentsContants/collection/collectionsuit";
import { casual, classic, formal, sport } from "../pokerTextSlider";

export const tripleSLiderElements = [
  {
    player: "ronaldo",
    btn: ["Explore Sport", "Sport Kiyimlar", "Спортивный"],
    t: sport,
    l: collectioncardsport,
  },
  {
    player: "lionel",
    btn: ["Explore Smart", "Rasmiy Kiyimlar", "Формальный"],
    t: classic,
    l: cardfrank,
  },
  {
    player: "neymar",
    btn: ["Explore Casual", "Ko'cha Kiyimlar", "Повседневный"],
    t: casual,
    l: collectioncardconstants,
  },
  {
    player: "suarez",
    btn: ["Explore Suits", "Kastyumlar", "Костюмы"],
    t: formal,
    l: cardfrank,
  },
];

export default tripleSLiderElements;
