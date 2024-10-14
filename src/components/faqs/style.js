import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100vh;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;
`;

export const Question = styled.div`
  position: relative;
  height: 40px;
  width: 600px;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  z-index: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 20px;
`;

export const Answer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 0;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  border: 1px solid black;
  height: 40px;
  width: 100%;
`;
