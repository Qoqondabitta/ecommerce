import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 auto;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Parts = styled.div`
  flex: 1;
  gap: 25px;
  font-weight: bold;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex: ${({ flex }) => flex};
  list-style: none;
`;

export const Item = styled.li`
  list-style-type: none;
  gap: ${({ gap }) => gap};
  width: ${({ widths }) => widths && "100%"};
  font-weight: ${({ capital }) => (capital ? "600" : "normal")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  color: ${({ color }) => color};
  text-transform: ${({ capital }) => (capital ? "uppercase" : "none")};
  margin-bottom: ${({ botMar }) => botMar && "10px"};
  line-height: ${({ heights }) => (heights ? `${heights}` : "normal")};
  padding-bottom: ${({ heights }) => heights && "0px"};
  border-bottom: ${({ underline }) => underline && "1px solid white"};
`;

export const Input = styled.input`
  background: transparent;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 100%;
  font-size: 17px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  outline: none;
  padding-block: 15px;
  color: white;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-transform: ${({ capital }) => (capital ? "none" : "uppercase")};
  color: ${({ color }) => color};
  line-height: ${({ heights }) => (heights ? `${heights}` : "normal")};
  padding-bottom: ${({ heights }) => heights && "0px"};
  border-bottom: ${({ underline }) => underline && "1px solid white"};
`;

export const XON = styled.h1`
  font-size: 175px;
  text-align: center;
  color: white;
  letter-spacing: 20px;
  /* font-family: Georgia, 'Times New Roman', Times, serif; */
  font-family: 'Times New Roman', Times, serif;
/* font-family: 'Courier New', Courier, monospace; */
`;
