import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background-color: black;
  position: relative;
  z-index: 0;
  @media only screen and (max-width: 800px) {
    /* height: 235vh; */
  }
  @media only screen and (max-width: 600px) {
    /* height: 265vh; */
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  @media only screen and (max-width: 800px) {
    padding: 30px 20px;
    /* height: 230vh; */
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 20px;
    /* height: 265vh; */
    gap: 10px;
  }
`;

export const FooterRows = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: ${({ lists }) => lists && "20px"};
    gap: 20px;
  }
`;

export const Parts = styled.div`
  flex: 1;
  gap: 15px;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    gap: 5px;
  }
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

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
    gap: 10px;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  gap: ${({ gap }) => gap};
  width: ${({ widths }) => widths && "100%"};
  font-weight: ${({ capital }) => (capital == "uppercase" ? "600" : "normal")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ color }) => color};
  cursor: pointer;
  text-transform: ${({ capital }) =>
    capital == "uppercase" ? "uppercase" : "none"};
  margin-bottom: ${({ botmar }) => (botmar ? "10px" : "0px")};
  line-height: ${({ heights }) => (heights ? `${heights}` : "normal")};
  padding-bottom: ${({ heights }) => heights && "0px"};
  border-bottom: ${({ underline }) =>
    underline == "underline" && "1px solid white"};
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
  padding-block: 10px;
  color: white;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-transform: ${({ capital }) =>
    capital == "uppercase" ? "none" : "uppercase"};
  color: ${({ color }) => color};
  line-height: ${({ heights }) => (heights ? `${heights}` : "normal")};
  padding-bottom: ${({ heights }) => heights && "0px"};
  border-bottom: ${({ underline }) => underline=="underline" && "1px solid white"};
`;

export const XON = styled.h1`
  font-size: 175px;
  text-align: center;
  color: white;
  letter-spacing: 20px;
  font-family: "DM Serif Display", Times, serif;

  @media only screen and (max-width: 600px) {
    font-size: 64px;
    line-height: 40px;
    margin-top: 50px;
    letter-spacing: -0.5px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 50px;
    line-height: 55px;
    margin-top: 50px;
    letter-spacing: -0.5px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 45px;
    line-height: 50px;
    word-spacing: 0.1rem;
    letter-spacing: 0.05rem;
    margin-top: 50px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 40px;
    line-height: 45px;
    margin-top: 50px;
    letter-spacing: -0.5px;
  }
`;
