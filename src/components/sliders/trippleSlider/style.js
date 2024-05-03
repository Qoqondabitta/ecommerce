import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  /* padding-block: 30px; */
  height: 150vh;
  width: 100%;
  gap: 5px;
`;

export const Container = styled.div`
  width: 300px;
  /* height: 600px; */
  border-bottom-left-radius: ${({ borderleft }) => borderleft && "50%"};
  border-bottom-right-radius: ${({ borderright }) => borderright && "50%"};
  /* position: relative; */
  /* background-color: red; */
`;

export const Content = styled.div`
  background-color: yellow;
  /* border-bottom-left-radius: ${({ borderleft }) => borderleft && "110%"};
  border-bottom-right-radius: ${({ borderright }) => borderright && "50%"}; */
  height: 300px;
  border-radius: 100%;
  transform: rotate(45deg);
`;

export const Wrapper = styled.div`
width: 660px;
flex-wrap: wrap;
height: 600px;
gap: 10px;
/* background-color: red; */
transform: rotate(-45deg);
`
