import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin-block: 100px;
  gap: 20px;
`;

export const Box = styled.div`
  gap: 30px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-inline: 20px;
  }
`;
export const LegalTableTitle = styled.h1`
  font-size: 50px;
  line-height: 55px;
  font-weight: 400;
  font-family: "Raleway", serif;
  letter-spacing: 0.1rem;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    line-height: 30px;
    font-weight: 500;
    font-size: 35px;
    width: 100%;
  }
  @media only screen and (max-width: 390px) {
    line-height: 25px;
    font-weight: 500;
    font-size: 25px;
    width: 100%;
  }
`;

export const LegalGreyStick = styled.div`
  height: 1px;
  width: 150px;
  background-color: grey;
`;

export const LegalText = styled.p`
  font-size: 15px;
  line-height: 26px;
  font-family: "Raleway", serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 11px;
  }
`;

export const LegalGeneralText = styled.h3`
  font-family: "Raleway", serif;
  font-size: 20px;
  line-height: 50px;
  width: fit-content;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.05rem;

  @media only screen and (max-width: 600px) {
    line-height: 30px;
    font-size: 18px;
    width: 100%;
    margin-block: 20px;
    font-weight: 600;
    text-align: center;
  }
`;
