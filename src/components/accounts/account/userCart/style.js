import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;

  @media only screen and (max-width: 600px) {
    gap: 50px;
    justify-content: center;
  }
`;
