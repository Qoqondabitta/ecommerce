import React from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  Content,
  Main,
  Wrapper,
} from "./style";
import "./triple.css";

const TripleSlider = () => {
  return (
    <Main className="alignEnd">
      {/* <Blur></Blur> */}
      <Wrapper className="center">
        <Container className="center">
          <Content className="ronaldo"></Content>
        </Container>
        <Container className="center">
          <Content className="lionel"></Content>
        </Container>
        <Container className="center third">
          <Content className="neymar"></Content>
        </Container>
        <Container className="center fourth">
          <Content className="suarez"></Content>
        </Container>
      </Wrapper>
    </Main>
  );
};

export default TripleSlider;