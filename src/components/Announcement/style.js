import { styled } from "styled-components";
export const Main = styled.div`
  background: white;
  position: relative;
  margin: 0 auto;
  width: 100%;
`;
export const Container = styled.div`
  z-index: 230000;
  padding: 5px;
  color: black;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: red;
  @media only screen and (max-width: 600px) {
    /* padding: 10px; */
    font-size: 14px;
    height: 16px;
  }
@media only screen and (max-width: 350px) {
padding: 0px;
}
`;