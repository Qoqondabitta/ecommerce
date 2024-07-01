import styled from "styled-components";

export const List = styled.ul`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
`;

export const Item = styled.li`
  gap: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  font-size: ${({ size }) => (size == "main" ? "14px" : "14px")};
  font-weight: ${({ size }) => (size == "main" ? "600" : "400")};
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid black;
  padding-bottom: 1px;
  text-transform: capitalize;
`;

export const MediaText = styled.p`
  background-color: rgb(193, 189, 189);
  padding: 3px 4px;
  font-size: 14px;
  border-radius: 2px;
`;
