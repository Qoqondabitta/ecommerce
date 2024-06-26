import { styled } from "styled-components";

export const TextWrapper = styled.div`
  width: 230px;
  overflow: hidden;
  position: absolute;
  bottom: 12%;
  left: 0%;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Text = styled.div`
  width: 1150px;
  position: relative;
  left: 0;
`;
export const Info = styled.p`
  color: ${({ colors }) => colors};
  font-size:22px;
  font-weight: 800;
  font-weight: bolder;
  width: 20%;
  text-align: center;
  z-index: 100000000;
`;
