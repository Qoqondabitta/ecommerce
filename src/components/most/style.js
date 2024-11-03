import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 0px;

  @media only screen and (max-width: 600px) {
    /* height: 200vh; */
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  gap: 15px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 970px;
    padding: 10px 0px;
  }
`;

export const Back = styled.div`
  flex: 1;
  height: 100%;
  /* width: 50%; */
  padding-bottom: 30px;
  position: relative;
  cursor: pointer;
  /* background: red; */
  background-image: url(${({ backimg }) => backimg});
  background-position: ${({ position }) => position};
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 434px;
  }
`;

export const Content = styled.div`
  height: 115px;
`;

export const Button = styled.div``;

export const Darkening = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.55);
`;
