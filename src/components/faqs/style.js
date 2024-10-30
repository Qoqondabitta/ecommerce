import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 85vh;
  justify-content: flex-start;

  @media only screen and (max-width: 1000px) {
    height: 45vh;
  }
  @media only screen and (max-width: 800px) {
    height: 50vh;
  }
  @media only screen and (max-width: 600px) {
    height: 80vh;
  }
  @media only screen and (max-width: 500px) {
    height: 60vh;
    padding-inline: 20px;
  }
  @media only screen and (max-width: 420px) {
    height: 65vh;
  }
  @media only screen and (max-width: 380px) {
    height: 85vh;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
    width: 90%;
  }
`;

export const QaTitle = styled.h1`
  font-family: "DM Serif Display", serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;

  @media only screen and (max-width: 600px) {
    width: 400px;
  }
  @media only screen and (max-width: 420px) {
    width: 380px;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
  }
  @media only screen and (max-width: 380px) {
    width: 340px;
  }
  @media only screen and (max-width: 360px) {
    width: 300px;
  }
`;

export const Question = styled.div`
  position: relative;
  height: 50px;
  width: 600px;
  cursor: pointer;
  border-bottom: 1px solid grey;
  display: flex;
  z-index: 1;
  font-size: 20px;
  letter-spacing: 0.08rem;
  font-weight: 400;
  background-color: white;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "DM Serif Display", serif;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    width: 400px;
    font-size: 18px;
  }
  @media only screen and (max-width: 420px) {
    width: 380px;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
  }
  @media only screen and (max-width: 380px) {
    width: 340px;
  }
  @media only screen and (max-width: 360px) {
    width: 300px;
  }
`;

export const Answer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 0;
  letter-spacing: 0.1rem;
  color: rgb(70, 68, 68);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  font-family: "DM Serif Display", serif;
  height: 50px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 400px;
    padding-left: 0px;
    font-size: 16px;
  }
  @media only screen and (max-width: 420px) {
    width: 380px;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    width: 340px;
  }
  @media only screen and (max-width: 361px) {
    width: 300px;
    font-size: 13px;
  }
`;

export const QaButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  transition: all 0.5s linear;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: blue;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 0px;
  }
`;

export const QaButtonLink = styled.a`
  text-decoration: none;
`;
