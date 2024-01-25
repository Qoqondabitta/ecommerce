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
  gap: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid grey;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 180px;
`;

export const Language = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
`;
