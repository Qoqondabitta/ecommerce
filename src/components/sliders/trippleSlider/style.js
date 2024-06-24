import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 70vh;
  width: 100%;
  gap: 5px;
`;

export const Container = styled.div`
  width: 250px;
`;

export const Content = styled.div`
  background-color: yellow;
  height: 400px;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  gap: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;