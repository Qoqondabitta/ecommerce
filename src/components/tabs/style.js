import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 50px 50px 0px 50px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
`;

export const Link = styled.a`
  text-decoration: none;
`;
