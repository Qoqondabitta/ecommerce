import { collectioncardconstants } from "../collection";
import { collectioncardsport } from "../collectionsport";
import { collectioncardsuits } from "../collectionsuit";
import { black } from "../colors/black";
import { blue } from "../colors/blue";
import { orange } from "../colors/orange";
import { red } from "../colors/red";
import { white } from "../colors/white";
import { shoes } from "../shoes";

export const category = [
  { c: ["men", "erkaklar", "Мужчины"], l: collectioncardconstants },
  { c: ["suits", "kastyumlar", "костюмы"], l: collectioncardsuits },
  { c: ["sport", "sport", "спорт"], l: collectioncardsport },
  { c: ["shoes", "oyoq kiyim", "обувь"], l: shoes },
  { c: ["red", "qizil", "красный"], l: red },
  { c: ["blue", "ko'k", "синий"], l: blue },
  { c: ["black", "qora", "черный"], l: black },
  { c: ["white", "oq", "белый"], l: white },
  { c: ["orange", "olovrang", "апельсин"], l: orange },
  { c: ["women", "ko'ayollar", "женщины"], l: blue },
  { c: ["kids", "bolalar", "Дети"], l: black },
];
