import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  background-color: rgb(240, 234, 234);
  margin-bottom: 50px;
  padding-bottom: 40px;

  @media only screen and (max-width: 600px) {
    background-color: white;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

export const Box = styled.div`
  gap: 10px;
  width: 100%;
  padding-top: 30px;
  margin-top: 10px;
`;

export const Wraps = styled.div`
  width: 80%;
  padding: 20px 20px 50px 20px;
  background-color: white;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    padding: 10px 20px 30px 20px;
    border-bottom: 1px solid black;
  }
`;

export const ListWrap = styled.div`
  width: 70%;
  padding-left: 50px;

  @media only screen and (max-width: 800px) {
    padding-left: 20px;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-left: 2px;
  }
`;

export const ListFull = styled.div`
  gap: 10px;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const ListBottom = styled.div`
  padding-left: 20px;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    padding-left: 0px;
  }
`;

export const MainTitle = styled.h2`
  text-transform: uppercase;
  cursor: pointer;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.1rem;
  font-family: "DM Serif Display", serif;

  @media only screen and (max-width: 400px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Headings = styled.h3`
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2rem;
  font-family: "DM Serif Display", serif;
  text-transform: uppercase;

  @media only screen and (max-width: 420px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 9px;
  }
`;
