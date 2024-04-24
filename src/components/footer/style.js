import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 40px 70px;
`;

export const Row = styled.div`
  width: 100%;
  /* gap: 60px; */
`;

export const Parts = styled.div`
  flex: 1;
`;

export const List = styled.ul`
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  color: ${({ color }) => color};
  text-transform: ${({ capital }) => (capital ? "uppercase" : "none")};
  margin-bottom: ${({botMar})=>botMar&&"15px"};
`;
