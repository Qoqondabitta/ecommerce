import styled from "styled-components";

export const Container = styled.div`
  gap: 30px;
  z-index: 400;
  position: absolute;
  bottom: 13%;
  left: 37%;
  margin: 0 auto;
  /* background-color: blue; */

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
export const Content = styled.div`
  height: 115px;
  width: 350px;
  position: relative;
  gap: 15px;

  @media only screen and (max-width: 600px){
    height: 130px;
    width: 250px;
  }
`;
