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
  @media only screen and (max-width: 1000px) {
    height: 40vh;
    /* height: 120vh; */
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
  /* height: 12vh; */
  top: 0px;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.25);

  @media only screen and (max-width: 600px) {
  /* height: 63vh; */
  display: none;
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
    top: 30%;
    margin-top: 0px;
    padding-left: 50px;
    /* width: 500px; */
  }
  @media only screen and (max-width: 1000px) {
    gap: 20px;
    top: 50%;
    margin-top: 0px;
    padding-left: 50px;
    /* width: 500px; */
  }
  @media only screen and (max-width: 600px) {
    gap: 10px;
    top: 30%;
    margin-top: 0px;
    padding-left: 20px;
    width: 235px;
  }
`;
