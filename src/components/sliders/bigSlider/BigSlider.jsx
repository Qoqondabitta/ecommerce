import React, { useState } from "react";
import { Child, Container, Main } from "./style";
import DoubleSlider from "../doubleSlider/Double";
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
  const order = useSelector((store) => store.order)

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
