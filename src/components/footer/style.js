import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 70px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Parts = styled.div`
  flex: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const Item = styled.li`
font-weight: ${({capital})=> capital ? '600' : 'normal'} ;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  color: ${({ color }) => color};
  text-transform: ${({ capital }) => (capital ? "uppercase" : "none")};
  margin-bottom: ${({ botMar }) => botMar && "10px"};
  line-height: ${({ heights }) => (heights ? `${heights}` : "normal")};
  padding-bottom: ${({ heights }) => heights && "0px"};
  border-bottom: ${({ underline }) => underline && "1px solid white"};
`;
