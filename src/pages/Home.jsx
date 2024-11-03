import React from "react";
import ProductSlider from "../components/sliders/productSlider/productSlider";
import TopProductSlider from "../components/sliders/topProductSlider/topProductSlider";
import BotProductSlider from "../components/sliders//botProductSlider/botProductSlider";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import ScrollWatcher from "../components/scrollWatcher/ScrollWatcher";
import TextSlider from "../components/mini/textSlider/TextSlider";
import GucciLido from "../components/mini/gucciLido/GucciLido";
import FootNav from "../components/footNav/FootNav";
import { homeComponents } from "../constants/home";

const Home = () => {
  const { value } = useSelector((store) => store.title);
  const turn = useSelector((store) => store.order);
  return (
    <div>
      <ScrollWatcher />
      {turn.value != 3 && <GucciLido />}
      {turn.value != 3 && <TextSlider />}
      {homeComponents.map((v, i) => v.element)}
      {value == "SHOE" ? (
        <ProductSlider />
      ) : value == "TOP" ? (
        <TopProductSlider />
        ) : (
          <BotProductSlider />
          )}
      <Footer />
      <FootNav />
    </div>
  );
};

export default Home;

// import Add from "../components/Announcement/Add";
// import Nav from "../components/navbars/secondNav/Nav";
// import BigSlider from "../components/sliders/bigSlider/BigSlider";
// import Genders from "../components/genders/Genders";
// import MostSellers from "../components/most/MostSellers";
// import TripleSlider from "../components/sliders/trippleSlider/tripleSlider";
// import Sneakers from "../components/sneakers/Sneakers";
// import ClothTab from "../components/tabs/ClothTab";
  {/* <Add />
  <Nav />
  <BigSlider />
  <Genders />
  <MostSellers />
  <TripleSlider />
  <Sneakers />
  <ClothTab /> */}