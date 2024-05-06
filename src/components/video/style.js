import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 80vh;
  margin-bottom: 270px;
  width: 100%;
  /* z-index: 39999999999999 !important; */
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
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.45);
`;
