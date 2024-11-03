import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 550px;
  width: 100%;
  gap: 20px;
  margin-block: 50px;

  @media only screen and (max-width: 600px) {
    height: 500px;
    padding: 0 20px;
    margin-top: 250px;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 300px;
  }
`;

export const Container = styled.div`
  width: 300px;

  @media only screen and (max-width: 700px) {
    width: 250px;
  }
`;

export const Content = styled.div`
  height: 500px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  padding-bottom: 20px;

  @media only screen and (max-width: 700px) {
    height: 400px;
  }
`;

export const Wrapper = styled.div`
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    height: 100%;
    overflow-x: scroll;
    padding: 10px 30px;
    justify-content: flex-start;
  }
`;