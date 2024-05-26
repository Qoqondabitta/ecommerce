import suit from "../../assets/images/triple/hijab.webp";
import suit2 from "../../assets/images/triple/hijab4.jpg";
import beckham from "../../assets/images/triple/hijab5.jpg";
import under from "../../assets/images/triple/hijab3.jpg";
import under1 from "../../assets/images/triple/hijab6.jpg";
import neymar from "../../assets/images/triple/hijab1.jpg";

export const fullScreen = [
  {
    classTitle: "messi",
    visible: false,
    time: -1,
    cards: { source: suit, place: "center" },
  },
  {
    classTitle: "messi",
    visible: false,
    time: 0,
    cards: { source: suit2, place: "center" },
  },
  {
    classTitle: "messi",
    visible: false,
    time: 1,
    cards: { source: neymar, place: "center" },
  },
  {
    classTitle: "messi",
    time: 2,
    visible: true,
    cards: { source: under, place: "right" },
    second: { source: under1, place: "center" },
  },
  {
    classTitle: "messi",
    visible: false,
    time: 3,
    cards: { source: beckham, place: "center" },
  },
];
