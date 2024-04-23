import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  Add,
  ArrowWrapper,
  Blur,
  Cards,
  Container,
  Content,
  Image,
  Left,
  Main,
  Right,
} from "./style";
// import casual from "../../assets/images/casual.png";
import smart from "../../assets/images/smart.jpg";
import smartm from "../../assets/images/smartm.jpg";
import suit from "../../assets/images/suit.webp";
import suit2 from "../../assets/images/suit2.webp";
import beckham from "../../assets/images/beckham.webp";
import under from "../../assets/images/under.webp";
import under1 from "../../assets/images/under.jpg";
import messi from "../../assets/images/messi.jpg";
import neymar from "../../assets/images/neymar.avif";
import zlatan from "../../assets/images/zlatan.avif";

import "./slider.css";
import Nav from "../secondNav/Nav";

const Slider = () => {
  return (
    <Main>
      <Nav />
      <Blur></Blur>
      <Container className="center">
        {/* First Card */}
        <Content className="messi" style={{ "--delay": "-1" }}>
          <Left className="center">
            <Cards s={suit}></Cards>
          </Left>{" "}
          <Right>
            <Cards s={suit2} p="center"></Cards>
          </Right>
        </Content>
        {/* First Card */}

        {/* Second Card */}
        <Content className="messi" style={{ "--delay": "0" }}>
          <Left className="center">
            <Cards s={smartm} p="right"></Cards>
          </Left>{" "}
          <Right>
            <Cards s={smart} p="top"></Cards>
          </Right>
        </Content>
        {/* Second Card */}

        {/* Third Card */}
        <Content className="messi" style={{ "--delay": "1" }}>
          <Left className="center">
            <Cards s={messi}></Cards>
          </Left>{" "}
          <Right>
            <Cards s={neymar} p="center"></Cards>
          </Right>
        </Content>
        {/* Third Card */}

        {/* Fourth Card */}
        <Content className="messi" style={{ "--delay": "2" }}>
          <Left className="center">
            <Cards s={under} p="right"></Cards>
          </Left>{" "}
          <Right>
            <Cards s={under1} p="center"></Cards>
          </Right>
        </Content>
        {/* Fourth Card */}

        {/* Fifth Card */}
        <Content className="messi" style={{ "--delay": "3" }}>
          <Left className="center">
            <Cards s={zlatan}></Cards>
          </Left>{" "}
          <Right>
            <Cards s={beckham} p="center"></Cards>
          </Right>
        </Content>
        {/* Fifth Card */}

        {/* Arrows */}
        <ArrowWrapper className="center" left="true">
          <MdKeyboardArrowLeft color="white" size="1.5em" style={{zIndex: "200"}} />
        </ArrowWrapper>
        <ArrowWrapper className="center">
          <MdKeyboardArrowRight color="white" size="1.5em" style={{zIndex: "200"}}/>
        </ArrowWrapper>
        {/* Arrows */}
      </Container>
    </Main>
  );
};

export default Slider;
