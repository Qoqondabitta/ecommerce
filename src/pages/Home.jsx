import React from "react";
import Add from "../components/Announcement/Add";
import Navbar from "../components/navbar/Navbar";
import PostNavbar from "../components/postNavbar/PostNavbar";
import Slider from "../components/slider/Slider";
import Nav from "../components/secondNav/Nav";
import Video from "../components/video/Video";
import DoubleSlider from "../components/doubleSlider/Double";
import ProductSlider from "../components/sliders/productSlider/productSlider";
import ClothTab from "../components/tabs/ClothTab";
import TopProductSlider from "../components/sliders/topProductSlider/topProductSlider";
import BotProductSlider from "../components/sliders/botProductSlider/botProductSlider";
import { useSelector } from "react-redux";

const Home = () => {
  const {value} = useSelector(store => store.title)
  console.log(value, ": this is the title");
  return (
    <div className="">
      <Add />
      {/* <Nav /> */}
      {/* <Navbar /> */}
      {/* <PostNavbar /> */}
      <DoubleSlider />
      <Video />
      <Slider />
      <ClothTab />
      {value == "SHOE" ? (
        <ProductSlider />
      ) : value == "TOP" ? (
        <TopProductSlider />
      ) : (
        <BotProductSlider />
      )}
    </div>
  );
};

export default Home;
