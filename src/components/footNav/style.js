import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: none;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000000000000000000000;
  padding: 10px 0px;

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;