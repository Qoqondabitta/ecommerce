import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 25px;
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 80px;
`;

export const TextWrapper = styled.div`
  width: 220px;
  overflow: hidden;
  /* background-color: red; */
`;

export const Text = styled.div`
  width: 1100px;
  position: relative;
  height: 130px;
  ${({position})=>position}: 0;
`;
export const Info = styled.p`
  color: ${({ colors }) => colors};
  font-size: 19px;
  font-weight: 400;
  font-weight: bolder;
  width: 20%;
  text-align: center;
  z-index: 100000000;
`;