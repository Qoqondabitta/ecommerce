import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 80vh;
  margin-bottom: 270px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Videos = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 125vh;
  top: 0px;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.25);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-end;
  gap: 40px;
  width: 700px;
  height: 100%;
  /* margin-top: 400px; */
  /* width: 100%; */
  background-color: red;
  z-index: 90000000000000000000;
`;
