import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding-block: 100px;
  gap: 20px;
`;

export const EqualTitle = styled.h1`
  font-size: 50px;
  line-height: 55px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 32px;
  }
`;


export const EqualText = styled.p`
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 10px;
  width: 90%;
  font-family: "Raleway", serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-transform: capitalize;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;