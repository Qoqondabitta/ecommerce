import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: 20px;
  margin-block: 100px;
`;


export const CareerStatement = styled.h2`
  font-size: 22px;
  line-height: 22px;
  font-weight: 100;
  font-family: "DM Serif Display", serif;
  letter-spacing: 0.1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 1050px) {
    font-size: 20px;
    line-height: 20px;
    width: 90%;
  }
`;

