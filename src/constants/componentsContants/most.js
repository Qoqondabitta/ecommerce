import back from "../../assets/images/bottomCard/bottom11png.webp";
import back1 from "../../assets/images/topCard/left.jpg";
import { cardfrank, collectioncardsport } from "./collection/collectionsport";
// import { cardfrank } from "./collection/collectionsuit";
import mostperfumeleft from "../../assets/images/backgrounds/mostperfumeright.jpg";
import mostperfumeright from "../../assets/images/backgrounds/mostperfumeright.png";
import mostwomanright from "../../assets/images/backgrounds/mostwomenright.jpeg";
import mostwomanleft from "../../assets/images/backgrounds/mostwomenleft.jpg";
import mostkidsleft from "../../assets/images/backgrounds/mostkidsleft.jpg";
import mostkidsright from "../../assets/images/backgrounds/mostkidsright.jpg";

export const mostconstants = [
  {
    p: "alignEnd",
    b: { source: back, placement: "top" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Pre-FALL 2024", "2024 KUZ", "До ОСЕНИ 2024"], t: "gucci" },
    btn: [
      "Explore Formal Collection",
      "To'plamlarni Ko'rish",
      "Смотреть коллекцию",
    ],
    l: cardfrank,
  },
  {
    p: "alignEnd",
    b: { source: back1, placement: "top" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Xon Sport", "Xon Sport", "XOH Спорт"], t: "gucci" },
    btn: [
      "Explore Sport Collection",
      "To'plamlarni Ko'rish",
      "Смотреть коллекцию",
    ],
    l: collectioncardsport,
  },
];
export const mostperfume = [
  {
    p: "alignEnd",
    b: { source: mostperfumeleft, placement: "center -340px" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: {
      ch: ["New Deodarants", "Yangi Dezodarantalar", "Новые дезодоранты"],
      t: "gucci",
    },
    btn: [
      "Explore Fragrance Collection",
      "Dezodarantlar To'plami",
      "Смотреть коллекцию",
    ],
    l: cardfrank,
  },
  {
    p: "alignEnd",
    b: { source: mostperfumeright, placement: "right" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Xon Perfumes", "Xon Atirlari", "XOH Духи"], t: "gucci" },
    btn: ["Explore Elite Perfumes", "Atiralr To'plami", "Смотреть коллекцию"],
    l: collectioncardsport,
  },
];

export const mostwoman = [
  {
    p: "alignEnd",
    b: { source: mostwomanleft, placement: "top" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Pre-FALL 2024", "2024 KUZ", "До ОСЕНИ 2024"], t: "gucci" },
    btn: ["Explore Fall Collection", "Kuzgi To'plam", "Смотреть коллекцию"],
    l: cardfrank,
  },
  {
    p: "alignEnd",
    b: { source: mostwomanright, placement: "center" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Pre-FALL 2024", "2024 KUZ", "До ОСЕНИ 2024"], t: "gucci" },
    btn: ["Explore Hijab Styles", "Hijoblar To'plami", "Смотреть коллекцию"],
    l: collectioncardsport,
  },
];

export const mostkids = [
  {
    p: "alignEnd",
    b: { source: mostkidsright, placement: "center" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Pre-FALL 2024", "2024 KUZ", "До ОСЕНИ 2024"], t: "gucci" },
    btn: ["Explore Fall Collection", "Kuzgi To'plam", "Смотреть коллекцию"],
    l: cardfrank,
  },
  {
    p: "alignEnd",
    b: { source: mostkidsleft, placement: "right" },
    ty: "grey",
    sp: "columnAlignEnd",
    te: { ch: ["Xon Sport", "Xon Sport", "XOH Спорт"], t: "gucci" },
    btn: [
      "Explore Sport Collection",
      "To'plamlarni Ko'rish",
      "Смотреть коллекцию",
    ],
    l: collectioncardsport,
  },
];
