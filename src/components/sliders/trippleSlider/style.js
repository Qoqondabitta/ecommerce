import { styled } from "styled-components";

export const Main = styled.div`
  /* overflow: hidden; */
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  background-color: red;
`;

export const Content = styled.div`
  /* display: flex; */
  /* flex: 1; */
  /* align-items: center; */
  /* justify-content: space-between; */
  /* position: absolute; */
  /* width: 100vw; */
  background-color: yellow;
  width: 100%;
  height: 100vh;
  /* background: url(${({backimg})=>backimg}); */
`;
