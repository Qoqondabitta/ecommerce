import { styled } from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 5px;
  width: 80px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Item = styled.li`
  font-size: 24px;

  @media only screena and (max-width: 450px) {
    font-size: 20px;
  }
`;
