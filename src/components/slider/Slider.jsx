import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Add, ArrowWrapper, Container, Content, Image, Left, Right } from './style'
import casual from "../../assets/images/casual.png"
import sport from "../../assets/images/sport.png"
import smart from "../../assets/images/smart.png";

const Slider = () => {
  return (
    <Container className="center">
      <Content>
        <Left>
          <Image src={casual} alt="sport clothes" />
        </Left>
        <Right className="columnCenter">
          <Add>Casual Clothes</Add>
          <Add>Are waiting for you</Add>
          <Add>Hurry up</Add>
        </Right>
      </Content>
      <Content>
        <Left>
          <Image src={smart} alt="sport clothes" />
        </Left>
        <Right className="columnCenter">
          <Add>Casual Clothes</Add>
          <Add>Are waiting for you</Add>
          <Add>Hurry up</Add>
        </Right>
      </Content>

        {/* Arrows */}
        <ArrowWrapper left="true">
          <MdKeyboardArrowLeft color="white" size="1.5em" />
        </ArrowWrapper>
        <ArrowWrapper>
          <MdKeyboardArrowRight color="white" size="1.5em" />
        </ArrowWrapper>
        {/* Arrows */}

      <Content>
        <Left>
          <Image src={sport} alt="sport clothes" />
        </Left>
        <Right className="columnCenter">
          <Add>Casual Clothes</Add>
          <Add>Are waiting for you</Add>
          <Add>Hurry up</Add>
        </Right>
      </Content>
    </Container>
  );
}

export default Slider