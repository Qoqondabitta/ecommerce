import React, { useState } from "react";
import { Child, Container, Main } from "./style";
import DoubleSlider from "../doubleSlider/Double";
// import Slider from "../slider/Slider";
import { ArrowWrapper } from "../doubleSlider/style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Video from "../../video/Video";
import "./bigSlider.css";
import FullScreenSlider from "../fullScreenSlider/FullScreenSlider";
import Kids from "../kids/Kids";
import { useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/order";

const BigSlider = () => {
  // const [side, setSide] = useState(1);
  const {value} = useSelector(store=>store.order)
  const Right = () => {
    // side == 3 ? setSide(0) : setSide(side + 1);
    increment()
  };
  const Left = () => {
      // side == 0 ? setSide(3) : setSide(side - 1);
    console.log(side);
    decrement()
  };
  return (
    <Main className="center">
      <Container className="center">
        {value == 0 ? <Video /> : value == 1 ? <DoubleSlider /> : value==2 ? <Kids /> : <FullScreenSlider />}
      </Container>
      {/* Arrows */}
      <ArrowWrapper className="center" left="true" onClick={Left}>
        <MdKeyboardArrowLeft
          color="white"
          size="1.5em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      <ArrowWrapper className="center" onClick={Right}>
        <MdKeyboardArrowRight
          color="white"
          size="1.5em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      {/* Arrows */}
    </Main>
  );
};

export default BigSlider;
