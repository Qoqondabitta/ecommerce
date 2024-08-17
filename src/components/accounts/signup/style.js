import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  position: relative;

  @media only screen and (max-width: 600px) {
    padding-top: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "DM Serif Display", serif;
`;

export const Subtitles = styled.p`
  font-size: 12px;
  color: orange;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

export const Remember = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 460px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;

  @media only screen and (max-width: 350px) {
    padding: 0px;
    border: none;
  }
`;

export const InputWrappers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
  height: fit-content;
`;

export const Labels = styled.div`
  font-size: 18px;
  color: black;
  pointer-events: none;
  transition: 0.15s all ease;
`;

export const Inputs = styled.input`
  font-family: "DM Serif Display", serif;
  outline: none;
  padding-bottom: 5px;
  border: 1px solid grey;
  font-size: 14px;
  height: 40px;
  width: 300px;
  color: black;
  background-color: transparent;
  font-weight: bold;
  transition: 0.15s all ease;
  padding: 5px 10px;
  border-radius: 5px;

  &:focus &::placeholder {
    color: transparent;
  }
  &:focus {
    border-color: black;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  width: 300px;
  height: 45px;
  padding-block: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-family: "DM Serif Display", serif;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    transform: scale(0.9);
  }

  @media only screen and (max-width: 600px) {
    padding-block: 0px;
    height: 40px;
  }
`;

export const Correct = styled.div`
  color: ${({ painting }) => painting?painting:"black"};
  font-size: 10px;
  font-weight: 600;
  position: relative;
  line-height: 14px;
  margin-right: 180px;
`;
