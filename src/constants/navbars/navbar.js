import rus from "../../assets/images/rus.png";
import eng from "../../assets/images/usa.png";
import uz from "../../assets/images/uzbek.png";
import { english, russian, uzbek } from "../../redux/language";
import { collectioncardconstants } from "../componentsContants/collection/collection";
import { casualkids } from "../componentsContants/collection/kids/casualkids";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";

export const tongues = [
  {
    country: "ENG",
    icon: eng,
    function: english(),
  },
  {
    country: "RUS",
    icon: rus,
    function: russian(),
  },
  {
    country: "UZB",
    icon: uz,
    function: uzbek(),
  },
];

export const links = [
  { title: ["Women", "Ayol", "Женщины"], l: hijabstyleconstants },
  { title: ["Men", "Erkaklarga", "Мужчины"], l: collectioncardconstants },
  { title: ["Kids", "Bolalarga", "Дети"], l: casualkids },
  { title: ["Perfume", "Atirlar", "Духи"], l: perfumecollection },
];
