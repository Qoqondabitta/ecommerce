import { styled } from "styled-components";

export const Container = styled.div`
  background: red;
  padding: 5px;
  color: yellow;
  font-size: 14px;
  text-align: center;
  font-weight: bold;

  @media only screen and (max-width: 450px) {
    padding: 10px;
  }
`;
