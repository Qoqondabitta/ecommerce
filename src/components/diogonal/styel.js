import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  /* background-color: green; */
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: relative;
`;

export const Parts = styled.div`
  /* flex: 1; */
  width: 50%;
  height: 100%;
  position: relative;
  background-color:red;
  background: url(${({ img }) => img});
  background-position: ${({position})=>position};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  position: absolute;
  top: 80%;
  left: ${({ left }) => left && "5%"};
  right: ${({ right }) => right && "20%"};
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  background-color: white;
`;

export const Long = styled.div`
width: 6px;
height: 100%;
position: absolute;
z-index: 200000000;
top: 0;
left: 49%;
background-color: red;
transform: skewX(-12deg);
`

