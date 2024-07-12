import back from "../../assets/images/bottomCard/bottom11png.webp";
import back1 from "../../assets/images/topCard/left.jpg";
import { collectioncardsport } from "./collection/collectionsport";
import { collectioncardsuits } from "./collection/collectionsuit";

export const mostconstants = [
  {
    p: "alignEnd",
    b: back,
    ty: "grey",
    sp: "columnAlignEnd",
    te: {ch:["Pre-FALL 2024", "2024 KUZ", "До ОСЕНИ 2024"],t:"gucci"},
    btn: [
      "Explore Formal Collection",
      "To'plamlarni Ko'rish",
      "Смотреть коллекцию",
    ],
    l: collectioncardsuits,
  },
  {
    p: "alignEnd",
    b: back1,
    ty: "grey",
    sp: "columnAlignEnd",
    te: {ch: ["Xon Sport", "Xon Sport", "XOH Спорт"], t:"gucci"},
    btn: [
      "Explore Formal Collection",
      "To'plamlarni Ko'rish",
      "Смотреть коллекцию",
    ],
    l: collectioncardsport,
  },
];