import { styled } from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translateX(0vw);
`;

export const Cards = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${({ s }) => s});
  background-position: ${({ p }) => p};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.45);
`;