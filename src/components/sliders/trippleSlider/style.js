import { styled } from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
  height: 80vh;
  width: 100%;
  gap: 20px;
  margin-block: 50px;
  @media only screen and (max-width: 800px) {
    height: 280vh;
    margin-top: 80vh;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 600px) {
    height: 180vh;
    margin-top: 200vh;
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
  gap: 20px;
  @media only screen and (max-width: 1100px) {
    height: 180vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 800px) {
  }
  @media only screen and (max-width: 600px) {
  }
`;