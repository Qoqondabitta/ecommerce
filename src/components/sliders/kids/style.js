import { styled } from "styled-components";

export const Main = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  width: 500%;
  position: relative;
  background-color: blue;
  left: 0;
`;

export const ImgContainer = styled.div`
  background-image: url(${({ bg }) => bg});
  width: 20%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${({pos})=>pos};

  /* background-color: red; */
`;

export const Image = styled.img`
width: 50%;
height: 100vh;
object-fit: cover;
object-position: ${({pos})=>pos};

`
