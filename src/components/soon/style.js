import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  /* background-position: ; */
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 40px 70px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  z-index: 50000000000000000;
  width: 300px;
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 35px;
  color: white;
  font-weight: 900;
`;

export const Motiv = styled.h1`
  color: white;
  font-weight: 600;
`;
export const Text = styled.p`
  color: white;
  font-weight: 400;
`;
export const Button = styled.button`
  font-size: 14px;
  /* font-weight: 600; */
  padding: 4px 40px;
  cursor: pointer;
  border: 1px solid white;
  color: white;
  background-color: transparent;
`;
