import rus from "../assets/images/rus.png";
import eng from "../assets/images/usa.png";
import uz from "../assets/images/uzbek.png";
import { english, russian, uzbek } from "../redux/language";

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