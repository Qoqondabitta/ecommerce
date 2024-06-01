import { styled } from "styled-components";
export const Main = styled.div`
  background: red;
  position: relative;
  margin: 0 auto;
  width: 100%;
`;
export const Container = styled.div`
  background: red;
  /* position: absolute; */
  z-index: 230000;
  /* z-index: 450; */
  padding: 5px;
  color: yellow;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 450px) {
    padding: 10px;
  }
`;
