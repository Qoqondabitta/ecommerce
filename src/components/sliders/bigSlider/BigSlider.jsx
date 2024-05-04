import React, { useState } from 'react'
import { Container, Main } from './style'
import DoubleSlider from '../doubleSlider/Double'
import Slider from '../slider/Slider'
import { ArrowWrapper } from '../doubleSlider/style'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Video from '../../video/Video'
import "./bigSlider.css";

const BigSlider = () => {
    // const [left, setLeft] = useState(false)
    // const [right, setRight] = useState(false);
    // const Right = () => {
    //   setRight(!value);
    // };
    // const Left = () => {
    //    setLeft(!value)    
    // }
  return (
    <Main className="center">
      <Container>
        <Video />
        <DoubleSlider />
        <Slider />
      </Container>
      {/* Arrows */}
      <ArrowWrapper
        className="moveLeft center"
        left="true"
      >
        <MdKeyboardArrowLeft
          color="white"
          size="1.5em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      <ArrowWrapper className="moveRight center">
        <MdKeyboardArrowRight
          color="white"
          size="1.5em"
          style={{ zIndex: "200" }}
        />
      </ArrowWrapper>
      {/* Arrows */}
    </Main>
  );
}

export default BigSlider