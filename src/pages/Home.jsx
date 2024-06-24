import React from "react";
import Add from "../components/Announcement/Add";
import Slider from "../components/sliders/slider/Slider";
import Nav from "../components/navbars/secondNav/Nav";
import Video from "../components/video/Video";
import DoubleSlider from "../components/sliders/doubleSlider/Double";
import ProductSlider from "../components/sliders/productSlider/productSlider";
import ClothTab from "../components/tabs/ClothTab";
import TopProductSlider from "../components/sliders/topProductSlider/topProductSlider";
import BotProductSlider from "../components/sliders//botProductSlider/botProductSlider";
import { useSelector } from "react-redux";
import Diogonal from "../components/diogonal/Diogonal";
import Soon from "../components/soon/Soon";
import Footer from "../components/footer/Footer";
import ScrollWatcher from "../components/scrollWatcher/ScrollWatcher";
import TripleSlider from "../components/sliders/trippleSlider/tripleSlider";
import BigSlider from "../components/sliders/bigSlider/BigSlider";
import TextSlider from "../components/mini/textSlider/TextSlider";
import PokerTextSlider from "../components/mini/pokerTextSlider/PokerTextSlider";
import TripleHeadings from "../components/mini/tripleHeadings/TripleHeadings";
import GucciLido from "../components/mini/gucciLido/GucciLido";
import MostSellers from "../components/most/MostSellers";
import Genders from "../components/genders/Genders";
import Sneakers from "../components/sneakers/Sneakers";

const Home = () => {
  const { value } = useSelector((store) => store.title);
  const turn = useSelector((store) => store.order);
  console.log(value, ": this is the title");
  return (
    <div>
      <ScrollWatcher />
      {turn.value != 3 && <GucciLido />}
      {turn.value != 3 && <TextSlider />}
      <Add />
      <Nav />
      <BigSlider />
      <Genders />
      <MostSellers />
      <Video />
      {/* <Diogonal /> */}
      {/* <Soon /> */}
      {/* <TripleHeadings /> */}
      {/* <TripleSlider /> */}
      {/* <PokerTextSlider /> */}
      <Sneakers />
      <ClothTab />
      {value == "SHOE" ? (
        <ProductSlider />
      ) : value == "TOP" ? (
        <TopProductSlider />
      ) : (
        <BotProductSlider />
      )}
      <Footer />
    </div>
  );
};

export default Home;