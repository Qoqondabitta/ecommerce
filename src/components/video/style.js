import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100vh;
  /* margin-bottom: 270px; */
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media only screen and (max-width: 1025px) {
    height: 100vh;
  }
  @media only screen and (max-width: 920px) {
    height: 100vh;
  }
  @media only screen and (max-width: 830px) {
    height: 100vh;
  }
  @media only screen and (max-width: 450px) {
    height: 26vh;
  }
  @media only screen and (max-width: 415px) {
    height: 25vh;
  }
  @media only screen and (max-width: 380px) {
    height: 30vh;
  }
  @media only screen and (max-width: 370px) {
    height: 27vh;
  }
`;

export const Videos = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.25);
  @media only screen and (max-width: 1025px) {
    height: 100vh;
  }
  @media only screen and (max-width: 920px) {
    height: 36vh;
  }
  @media only screen and (max-width: 830px) {
    height: 38vh;
  }
  @media only screen and (max-width: 450px) {
    height: 26vh;
  }
  @media only screen and (max-width: 415px) {
    height: 25vh;
  }
  @media only screen and (max-width: 380px) {
    height: 30vh;
  }
  @media only screen and (max-width: 370px) {
    height: 27vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 30px;
  width: 700px;
  margin-top: 150px;
  position: absolute;
  top: 150px;
  z-index: 900;
  padding-left: 80px;

  @media only screen and (max-width: 1100px) {
    gap: 20px;
    top: 40%;
    margin-top: 0px;
    padding-left: 50px;
  }
  @media only screen and (max-width: 1000px) {
    gap: 20px;
    top: 50%;
    margin-top: 0px;
    padding-left: 50px;
  }
  @media only screen and (max-width: 600px) {
    gap: 10px;
    top: 50%;
    margin-top: 0px;
    padding-left: 20px;
    width: 235px;
  }
  @media only screen and (max-width: 450px) {
    top: 45%;
  }
  @media only screen and (max-width: 400px) {
    top: 40%;
  }
`;