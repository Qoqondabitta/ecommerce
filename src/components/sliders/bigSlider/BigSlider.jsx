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
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/order";

const BigSlider = () => {
  const dispatch = useDispatch()
  // const [side, setSide] = useState(1);
  const order = useSelector((store) => store.order)
    console.log(order);
  // console.log(value);
  const Right = () => {
    // console.log(value);
    // side == 3 ? setSide(0) : setSide(side + 1);
    dispatch(increment())
  };
  const Left = () => {
      // side == 0 ? setSide(3) : setSide(side - 1);
    // console.log(value);
    dispatch(decrement())
  };
  return (
    <Main className="center">
      <Container className="center">
        {order.value == 0 ? <Video /> : order.value == 1 ? <DoubleSlider /> : order.value==2 ? <Kids /> : <FullScreenSlider />}
      </Container>
      {/* Arrows */}
      <ArrowWrapper className="center" left="true" onClick={()=>dispatch(increment())}>
        <MdKeyboardArrowLeft
          color="white"
          size="1.5em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      <ArrowWrapper className="center" onClick={()=>dispatch(decrement())}>
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
