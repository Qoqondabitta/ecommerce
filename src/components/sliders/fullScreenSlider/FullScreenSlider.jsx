import React from "react";
import {
  Cards,
  Container,
  Content,
  Main,
} from "./style";
import suit from "../../../assets/images/triple/hijab.webp";
import suit2 from "../../../assets/images/triple/hijab4.jpg";
import beckham from "../../../assets/images/triple/hijab5.jpg";
import under from "../../../assets/images/triple/hijab3.jpg";
import under1 from "../../../assets/images/triple/hijab6.jpg";
import neymar from "../../../assets/images/triple/hijab1.jpg";
import "./fullScreenSlider.css";

const FullScreenSlider = () => {
  return (
    <Main>
      <Container className="center">
        {/* First Card */}
        <Content className="messi" style={{ "--delay": "-1" }}>
            <Cards s={suit} p="center"></Cards>
        </Content>
        {/* First Card */}

        {/* Second Card */}
        <Content className="messi" style={{ "--delay": "0" }}>
            <Cards s={suit2} p="center"></Cards>
        </Content>
        {/* Second Card */}

        {/* Third Card */}
        <Content className="messi" style={{ "--delay": "1" }}>
            <Cards s={neymar} p="center"></Cards>
        </Content>
        {/* Third Card */}

        {/* Fourth Card */}
        <Content className="messi" style={{ "--delay": "2" }}>
            <Cards s={under} p="right"></Cards>
            <Cards s={under1} p="center"></Cards>
        </Content>
        {/* Fourth Card */}

        {/* Fifth Card */}
        <Content className="messi" style={{ "--delay": "3" }}>
            <Cards s={beckham} p="center"></Cards>
        </Content>
        {/* Fifth Card */}
      </Container>
    </Main>
  );
};

export default FullScreenSlider;