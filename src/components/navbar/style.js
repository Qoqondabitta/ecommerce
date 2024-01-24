import { styled } from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Parts = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 180px;
`;

export const Language = styled.span`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
