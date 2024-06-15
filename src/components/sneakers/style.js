import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: white;
  /* padding: 15px; */
`;

export const Container = styled.div`
width: 100%;
  height: 100vh;
  background-color: red;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 70px;
`;

// EXTRA
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  z-index: 50000000000000000;
  /* width: 300px; */
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