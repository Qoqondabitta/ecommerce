import { styled } from "styled-components";

export const TextWrapper = styled.div`
  width: 120px;
  overflow: hidden;
  position: absolute;
  bottom:  10%;
  right: 5%;
  z-index: 20000000000000000;
`;

export const Text = styled.div`
  width: 600px;
  /* background-color: red; */
  position: relative;
  left: 0;
`;
export const Info = styled.p`
  color: goldenrod;
  font-size: 16px;
  font-weight: bolder;
  width: 20%;
  text-align: center;
`;