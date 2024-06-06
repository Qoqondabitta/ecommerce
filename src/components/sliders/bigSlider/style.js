import { styled } from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 300vw;
  height: 100vh;
`;

export const Child = styled.div`
  width: 100vw;
  height: 100vh;
`;
