import { bottom, shoe, top } from "../redux/title";

export const TabTitels = [
  {
    name: "Top",
    id: 1,
    class: "top",
    check: "TOP",
    function: top(),
  },
  {
    name: "Shoe",
    id: 2,
    class: "shoe",
    check: "SHOE",
    function: shoe(),
  },
  {
    name: "Bottom",
    id: 3,
    class: "bottom",
    check: "BOT",
    function: bottom(),
  },
];
