import { styled } from "styled-components";

export const Arrow = styled.div`
  background: white;
  padding: 10px 20px;
  position: absolute;
  scroll-behavior: smooth;
  cursor: pointer;
  ${({ position }) => position}: 3.7%;
  top: 45%;
  z-index: 20000;
  display: none;
  transition: all 3s;
  transform: rotate(${({ rotate }) => rotate && "-180deg"});
`;
export const Main = styled.div`
  margin: 50px auto;
  padding: 0 50px;
  position: relative;
  scroll-behavior: smooth;

  &:hover ${Arrow} {
    display: block;
  }
`;

export const Container = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position};
  gap: 30px;
  scroll-behavior: smooth;
  padding-bottom: 40px;
`;

export const Content = styled.div`
scroll-behavior: smooth;
`;
