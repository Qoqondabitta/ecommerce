import React from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  Content,
  Main,
} from "./style";
import "./triple.css";

const TripleSlider = () => {
  return (
    <Main>
      {/* <Blur></Blur> */}
      <Container className="center">
        <Content className="ronaldo"></Content>
      </Container>
    </Main>
  );
};

export default TripleSlider;