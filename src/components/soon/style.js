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
  gap: 20px;
  z-index: 50000000000000000;
  width: 300px;
`;

export const Title = styled.p`
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
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  font-size: 18px;
  border-radius: 5px;
  font-weight: 500;
  padding: 8px 80px;
  /* width: 97%; */
  cursor: pointer;
  border: 1px solid white;
  color: white;
  background-color: transparent;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.25);
`;