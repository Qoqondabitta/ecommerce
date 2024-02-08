import { styled } from "styled-components";

export const Container = styled.div`
  position: ${({ position }) => position && "absolute"};
  top: 135%;
  z-index: 900000000;
  display: flex;
  width: 700px;
  align-items: flex-start;
  padding: 20px 130px 20px 20px;
  justify-content: space-between;
  border-radius: 10px;
  background: #fff;
  border: none;
  background: #01172c;
  gap: 50px;

  @media only screen and (max-width: 1300px) {
    left: -5%;
  }
  @media only screen and (max-width: 450px) {
    width: 100vw;
    left: -37%;
    flex-direction: column;
  }

  @media only screen and (max-width: 400px) {
    width: 100vw;
    left: -16%;
    flex-direction: column;
  }
`;

export const Types = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: gold;
  margin-bottom: 10px;
  font-weight: bold;
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const Item = styled.li`
  color: #fff;
  font-size: 20px;

  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
