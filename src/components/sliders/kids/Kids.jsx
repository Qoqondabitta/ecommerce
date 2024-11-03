import React from "react";
import { Container, Image, ImgContainer, Main, Wrapper } from "./style";
import "./kids.css";
import kidsElements from "../../../constants/slideConstants/kidsElements";

const Kids = () => {
  return (
    <Wrapper className="center">
      <Main>
        <Container className="justifyStart kid">
          {kidsElements.map((v, i) => (
            <ImgContainer bg={v.backPhoto} key={i} pos={v.position.placement}>
              {/* {v.black && <Black></Black>} */}
              {v.photos &&
                v.gallery.map((value, i) => (
                  <Image
                    loading="lazy"
                    alt="XON Online Store"
                    src={value.source}
                    pos={value.positioning}
                    key={i}
                  />
                ))}
            </ImgContainer>
          ))}
          {/* <ImgContainer pos="top" bg={kids4}></ImgContainer>
            <ImgContainer>
              <Image pos="left" src={kids3} />
              <Image pos="right" src={kids2} />
              <Black></Black>
            </ImgContainer>
            <ImgContainer pos="center" bg={kids}>
              <Black></Black>
            </ImgContainer>
            <ImgContainer bg={kids1}>
              <Black></Black>
            </ImgContainer>
            <ImgContainer bg={kids4}></ImgContainer> */}
        </Container>
      </Main>
    </Wrapper>
  );
};

export default Kids;
