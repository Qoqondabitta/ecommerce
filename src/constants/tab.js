import { bottom, shoe, top } from "../redux/title";

export const TabTitels = [
  {
    name: ["Top", "Tepa", "Верхняя"],
    id: 1,
    class: "top",
    check: "TOP",
    function: top(),
  },
  {
    name: ["Shoe", "Oyoq", "Обувь"],
    id: 2,
    class: "shoe",
    check: "SHOE",
    function: shoe(),
  },
  {
    name: ["Bottom", "Pas", "Нижняя"],
    id: 3,
    class: "bottom",
    check: "BOT",
    function: bottom(),
  },
];
