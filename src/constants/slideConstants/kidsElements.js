import kids from "../../assets/images/triple/kids2.avif";
import kids1 from "../../assets/images/triple/kids3.jpg";
import kids2 from "../../assets/images/triple/kids.avif";
import kids3 from "../../assets/images/triple/kids.jpg";
import kids4 from "../../assets/images/triple/kids1.jpg"; // top


export const kidsElements = [
  {
    position: { placement: "top", show: true },
    backPhoto: kids4,
    order: 1,
    black: false,
    photos: false,
  },
  {
    position: { placement: "", show: false },
    backPhoto: "",
    black: true,
    order: 2,
    photos: true,
    gallery: [
      { positioning: "left", source: kids3 },
      { positioning: "right", source: kids2 },
    ],
  },
  {
    position: { placement: "center", show: true },
    backPhoto: kids,
    black: true,
    order: 3,
    photos: false,
  },
  {
    position: { placement: "center", show: false },
    backPhoto: kids1,
    black: true,
    order: 4,
    photos: false,
  },
  {
    position: { placement: "top", show: true },
    backPhoto: kids4,
    order: 1,
    black: false,
    photos: false,
  },
];

export default kidsElements;
