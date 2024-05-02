import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Back = styled.div`
  flex: 1;
  height: 100%;
  background: red;
  background-image: url(${({ backimg }) => backimg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

// export 
