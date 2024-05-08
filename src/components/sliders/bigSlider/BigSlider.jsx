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

const BigSlider = () => {
  const [side, setSide] = useState(1);
  const Right = () => {
    side == 3 ? setSide(0) : setSide(side + 1);
  };
  const Left = () => {
      side == 0 ? setSide(3) : setSide(side - 1);
      console.log(side);
  };
  return (
    <Main className="center">
      <Container className="center">
        {side == 0 ? <Video /> : side == 1 ? <DoubleSlider /> : side==2 ? <Kids /> : <FullScreenSlider />}
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
