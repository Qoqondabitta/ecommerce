import styled from "styled-components";

export const FindTool = styled.div`
  gap: 20px;
  padding: 10px 20px;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 57px;
  right: 0px;
  z-index: 20000;
  background-color: white;
  border: 1px solid black;
  gap: 20px;
  
  @media only screen and (max-width: 600px) {
    top: 52px;
    left: 0;
  }
`;

export const InputWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0px;
  margin-top: 20px;
  position: relative;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  background-color: white;
  font-style: "DM Serif Display", serif;
  color: black;
  font-size: 14px;
  outline: none;
  `;

export const Label = styled.label`
  background-color: white;
  font-style: "DM Serif Display", serif;
  color: black;
  font-size: 14px;
  position: absolute;
  top: -20px;
`;

export const SearchButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  background: black;
  border: none;
  color: white;
  cursor: pointer;
`;
