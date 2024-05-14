import { styled } from "styled-components";

export const TextWrapper = styled.div`
  width: 120px;
  overflow: hidden;
  position: absolute;
  bottom:  10%;
  right: 5%;
`;

export const Text = styled.div`
  width: 600px;
  position: relative;
  left: 0;
`;
export const Info = styled.p`
  color: ${({colors})=>colors};
  font-size: 19px;
  font-weight: 400;
  font-weight: bolder;
  width: 20%;
  text-align: center;
  z-index: 100000000;
`;