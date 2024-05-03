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
    <Main className="center">
      {/* <Blur></Blur> */}
      <Wrapper className="center">
        <Container borderleft="true" className="center" id="first">
          <Content borderleft="true" className="ronaldo"></Content>
        </Container>
        <Container borderleft="true" className="center second">
          <Content borderleft="true" id="second" className="ronaldo"></Content>
        </Container>
        <Container borderright="true" className="center third">
          <Content borderright="true" className="ronaldo"></Content>
        </Container>
        <Container borderright="true" className="center fourth">
          <Content borderright="true" className="ronaldo"></Content>
        </Container>
      </Wrapper>
    </Main>
  );
};

export default TripleSlider;