import React from "react";
import { Container, Content, Main, Wrapper } from "./style";
import "./triple.css";
import tripleSliderElements from "../../../constants/slideConstants/tripleSliderElements";

const TripleSlider = () => {
  return (
    <Main className="center">
      <Wrapper className="center">
        {tripleSliderElements.map((v, i) => (
          <Container key={i} className="center">
            <Content className={v.player}></Content>
          </Container>
        ))}
      </Wrapper>
    </Main>
  );
};

export default TripleSlider;
