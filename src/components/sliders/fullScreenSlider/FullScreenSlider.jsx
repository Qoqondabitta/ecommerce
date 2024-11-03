import React from "react";
import {
  Black,
  Cards,
  Container,
  Content,
  Main,
} from "./style";
import "./fullScreenSlider.css";
import { fullScreen } from "../../../constants/slideConstants/fullScreen";

const FullScreenSlider = () => {
  return (
    <Main>
      <Container className="center">
        {fullScreen.map((v, i) => (
          <Content key={i} className={v.classTitle} style={{ "--delay": v.time }}>
            <Cards s={v.cards.source} p={v.cards.place}>{ i==4&&<Black></Black>}</Cards>
            {v.visible && <Cards s={v.second.source} p={v.second.place}></Cards>}
          </Content>
        ))}
        {/* <Content className="messi" style={{ "--delay": "-1" }}>
          <Cards s={suit} p="center"></Cards>
        </Content>

        <Content className="messi" style={{ "--delay": "0" }}>
          <Cards s={suit2} p="center"></Cards>
        </Content>

        <Content className="messi" style={{ "--delay": "1" }}>
          <Cards s={neymar} p="center"></Cards>
        </Content>

        <Content className="messi" style={{ "--delay": "2" }}>
          <Cards s={under} p="right"></Cards>
          <Cards s={under1} p="center"></Cards>
        </Content>

        <Content className="messi" style={{ "--delay": "3" }}>
          <Cards s={beckham} p="center">
            <Black></Black>
          </Cards>
        </Content> */}

      </Container>
    </Main>
  );
};

export default FullScreenSlider;