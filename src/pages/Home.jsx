import React from "react";
import Add from "../components/Announcement/Add";
import Slider from "../components/sliders/slider/Slider";
import Nav from "../components/navbars/secondNav/Nav";
import Video from "../components/video/Video";
import DoubleSlider from "../components/sliders/doubleSlider/Double";
import ProductSlider from "../components/sliders/productSlider/productSlider";
import ClothTab from "../components/tabs/ClothTab";
import TopProductSlider from "../components/sliders/topProductSlider/topProductSlider";
import BotProductSlider from "../components/sliders/botProductSlider/botProductSlider";
import { useSelector } from "react-redux";
import Diogonal from "../components/diogonal/Diogonal";
import Soon from "../components/soon/Soon";
import Footer from "../components/footer/Footer";
import ScrollWatcher from "../components/scrollWatcher/ScrollWatcher";
import MostSellers from "../components/most/MostSellers";

const Home = () => {
  const {value} = useSelector(store => store.title)
  console.log(value, ": this is the title");
  return (
    <div className="columnCenter" style={{gap: "240px"}}>
      <ScrollWatcher />
      <Add />
      <Nav />
      {/* <Navbar /> */}
      {/* <PostNavbar /> */}
      <DoubleSlider />
      <Video />
      <Diogonal />
      <Soon />
      <MostSellers />
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
