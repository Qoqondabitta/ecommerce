import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 25px; */
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 50px;
  /* background-color: red; */
`;

export const TextWrapper = styled.div`
  width: 230px;
  /* height: 25px; */
  overflow: hidden;
  /* background-color: yellow; */
`;

export const Text = styled.div`
  width: 1150px;
  position: relative;
  /* height: 130px; */
  ${({position})=>position}: 0;
`;

export const Info = styled.p`
  color: ${({ colors }) => colors};
  font-size: 19px;
  font-weight: 600;
  font-weight: bolder;
  width: 20%;
  text-align: center;
  z-index: 100000000;
`;
