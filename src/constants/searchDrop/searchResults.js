import { hijabstyleconstants } from "../componentsContants/collection/women/stylehijab";
import { hijabforhead } from "../componentsContants/collection/women/hijabhead";
import { collectioncardconstants } from "../componentsContants/collection/collection";
import {
  cardfrank,
  collectioncardsport,
} from "../componentsContants/collection/collectionsport";
import { accessoryConstants } from "../componentsContants/collection/accessories/watches";
import { perfumecollection } from "../componentsContants/collection/perfume/perfumecollection";
import { shoes } from "../componentsContants/collection/shoes";
import caps from "../../assets/images/collection/men/collectioncard8.jpeg";
import tShirts from "../../assets/images/collection/men/collectioncard3.webp";
import tracksuit from "../../assets/images/collection/men/collectioncard9.webp";
import jeans from "../../assets/images/collection/men/collectioncard4.avif";
import bag from "../../assets/images/collection/men/collectioncard10.jpeg";
import short from "../../assets/images/collection/men/threcollectioncarddoublefirst1alternative.jpeg";
import sneakers from "../../assets/images/collection/men/collectioncard35.jpeg";
import watch from "../../assets/images/accessories/rolexwatches1.png";
import perfume from "../../assets/images/kids/cytrus1.png";
import hijab from "../../assets/images/hijab/pinkheadhijab.png";
import hijabhead from "../../assets/images/hijab/whiteheadhijab.png";
import suits from "../../assets/images/collection/men/suits3.jpeg";
import handbags from "../../assets/images/collection/men/collectioncard14.jpeg";
import belt from "../../assets/images/collection/men/suits50.jpeg";
import bowtie from "../../assets/images/collection/men/suits45alternative.jpeg";
import tie from "../../assets/images/collection/men/suits42.jpeg";
import shirts from "../../assets/images/collection/men/suits22.jpeg";

export const resultList = [
  {
    n: ["short", "shortik", "шорты"],
    url: short,
    page: "/collection",
    l: collectioncardsport,
  },
  {
    n: ["tracksuit", "sportivka", "спортивкa"],
    url: tracksuit,
    page: "/collection",
    l: collectioncardsport,
  },
  {
    n: ["sneakers", "krasovkalar", "кроссовки"],
    url: sneakers,
    page: "/collection",
    l: shoes,
  },
  {
    n: ["sneakers", "krosovkalar", "кроссовки"],
    url: sneakers,
    page: "/collection",
    l: shoes,
  },
  {
    n: ["watches", "soatlar", "часы"],
    url: watch,
    page: "/collection",
    l: accessoryConstants,
  },
  {
    n: ["wrist watches", "qo'l soatlar", "наручные часы"],
    url: watch,
    page: "/collection",
    l: accessoryConstants,
  },
  {
    n: ["perfumes", "atirlar", "духи"],
    url: perfume,
    page: "/collection",
    l: perfumecollection,
  },
  {
    n: ["accessories", "aksesuarlar", "аксессуары"],
    url: watch,
    page: "/collection",
    l: accessoryConstants,
  },
  {
    n: ["ties", "uzun bo'yinbog'", "галстук"],
    url: tie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["ties", "bo'yinbog'", "галстук"],
    url: tie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["ties", "galstuk'", "галстук"],
    url: tie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["bow tie", "kalta bo'yinbog'", "галстук-бабочка"],
    url: bowtie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["bow tie", "babochka'", "галстук-бабочка"],
    url: bowtie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["bow tie", "bo'yinbog'", "галстук-бабочка"],
    url: bowtie,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["t-shirts", "futbolkalar", "футболки"],
    url: tShirts,
    page: "/collection",
    l: collectioncardsport,
  },
  {
    n: ["t-shirt", "futbolka", "футболкa"],
    url: tShirts,
    page: "/collection",
    l: collectioncardsport,
  },
  {
    n: ["shirts", "ko'ylaklar", "рубашки"],
    url: suits,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["belts", "kamarlar", "ремни"],
    url: belt,
    page: "/collection",
    l: collectioncardconstants,
  },
  { n: "jeans", url: jeans, page: "/collection", l: collectioncardconstants },
  { n: "bags", url: bag, page: "/collection", l: collectioncardconstants },
  {
    n: ["handbags", "sumkalar", "сумки"],
    url: handbags,
    page: "/collection",
    l: collectioncardconstants,
  },
  {
    n: ["suits", "kastyumlar", "костюмы"],
    url: shirts,
    page: "/collection",
    l: cardfrank,
  },
  {
    n: ["caps", "kepkalar", "кепки"],
    url: caps,
    page: "/collection",
    l: collectioncardconstants,
  },
  {
    n: ["hijabs", "hijob", "хиджаб"],
    url: hijab,
    page: "/collection",
    l: hijabstyleconstants,
  },
  {
    n: ["hijabs for head", "bosh uchun hijob", "хиджаб на голову"],
    url: hijabhead,
    page: "/collection",
    l: hijabforhead,
  },
];
