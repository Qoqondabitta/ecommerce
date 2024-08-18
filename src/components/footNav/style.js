import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: none;
  height: 30px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000000000000000000000;
  padding: 5px 0px 0px 0px;

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const IconBox = styled.div`
  width: 20%;
  height: 100%;
`;
