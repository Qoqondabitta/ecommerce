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
import Nav from "../../navbars/secondNav/Nav";

const BigSlider = () => {
  const dispatch = useDispatch()
  const order = useSelector((store) => store.order)

  return (
    <Main className="center">
      <Nav />
      <Container className="center">
        {order.value == 0 ? <FullScreenSlider /> : order.value == 1 ? <DoubleSlider /> : order.value==2 ? <Kids /> : <Video />}
      </Container>
      {/* Arrows */}
      <ArrowWrapper className="center" left="true" onClick={()=>dispatch(decrement())}>
        <MdKeyboardArrowLeft
          color="white"
          size="2em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      <ArrowWrapper className="center" onClick={()=>dispatch(increment())}>
        <MdKeyboardArrowRight
          color="white"
          size="2em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      {/* Arrows */}
    </Main>
  );
};

export default BigSlider;
