import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  ArrowWrapper,
  Blur,
  Cards,
  Container,
  Content,
  Left,
  Main,
  Right,
} from "./style";
import smart from "../../../assets/images/smart.jpg";
import smartm from "../../../assets/images/smartm.jpg";
import suit from "../../../assets/images/triple/hijab1.webp";
import suit2 from "../../../assets/images/triple/hijab4.jpg";
import beckham from "../../../assets/images/triple/hijab5.jpg";
import under from "../../../assets/images/triple/hijab3.jpg";
import under1 from "../../../assets/images/triple/hijab6.jpg";
import messi from "../../../assets/images/triple/hijab2.jpg";
import neymar from "../../../assets/images/triple/hijab1.jpg";
import zlatan from "../../../assets/images/triple/hijab.jpg";
import "./fullScreenSlider.css";

const FullScreenSlider = () => {
  return (
    <Main>
      {/* <Blur></Blur> */}
      <Container className="center">
        {/* First Card */}
        <Content className="messi" style={{ "--delay": "-1" }}>
          {/* <Left className="center"> */}
            <Cards s={suit} p="center"></Cards>
          {/* </Left>{" "} */}
          {/* <Right> */}
          {/* </Right> */}
        </Content>
        {/* First Card */}

        {/* Second Card */}
        <Content className="messi" style={{ "--delay": "0" }}>
          {/* <Left className="center"> */}
            <Cards s={suit2} p="center"></Cards>
            {/* <Cards s={smartm} p="right"></Cards> */}
          {/* </Left>{" "} */}
          {/* <Right> */}
            {/* <Cards s={smart} p="top"></Cards> */}
          {/* </Right> */}
        </Content>
        {/* Second Card */}

        {/* Third Card */}
        <Content className="messi" style={{ "--delay": "1" }}>
          {/* <Left className="center"> */}
            {/* <Cards s={messi}></Cards> */}
          {/* </Left>{" "} */}
          {/* <Right> */}
            <Cards s={neymar} p="center"></Cards>
          {/* </Right> */}
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
          {/* <Left className="center"> */}
            {/* <Cards s={zlatan}></Cards> */}
          {/* </Left>{" "} */}
          {/* <Right> */}
            <Cards s={beckham} p="center"></Cards>
          {/* </Right> */}
        </Content>
        {/* Fifth Card */}
      </Container>
    </Main>
  );
};

export default FullScreenSlider;
