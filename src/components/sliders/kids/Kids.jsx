import React from "react";
import { Container, Image, ImgContainer, Info, Main, Text, TextWrapper, Wrapper } from "./style";
import "./kids.css"
import kids from "../../../assets/images/triple/kids2.avif" // center
import kids1 from "../../../assets/images/triple/kids3.jpg"
import kids2 from "../../../assets/images/triple/kids.avif"
import kids3 from "../../../assets/images/triple/kids.jpg";
import kids4 from "../../../assets/images/triple/kids1.jpg" // top

const Kids = () => {
    return (
      <Wrapper  className="center">
        <Main>
          <Container className="justifyStart kid">
            <ImgContainer pos="top" bg={kids4}></ImgContainer>
            <ImgContainer>
              <Image pos="left" src={kids3} />
              <Image pos="right" src={kids2} />
            </ImgContainer>
            <ImgContainer pos="center" bg={kids}></ImgContainer>
            <ImgContainer bg={kids1}></ImgContainer>
            <ImgContainer bg={kids4}></ImgContainer>
          </Container>
        </Main>
      </Wrapper>
    );
};

export default Kids;
