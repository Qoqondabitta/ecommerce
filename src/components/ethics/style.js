import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding-block: 100px;
`;

export const Box = styled.div`
  gap: 30px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-inline: 20px;
  }
`;

export const EthicFirstTitle = styled.h3`
  font-size: 18px;
  line-height: 28px;
  font-family: "Roboto", serif;
  letter-spacing: -0.05rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
  }
`;

export const EthicSecondTitle = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
  line-height: 35px;
  font-family: "Roboto", serif;
  letter-spacing: -0.05rem;
  font-weight: 500;
  text-align: center;
`;

export const EthicThirdTitle = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  line-height: 30px;
  font-family: "Roboto", serif;
  letter-spacing: -0.05rem;
  font-weight: 100;
  text-align: center;
  font-style: italic;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
  }
`;

export const EthicText = styled.p`
  font-size: 15px;
  line-height: 25px;
  width: 100%;
  text-indent: unset;
  white-space: pre-line;
  font-family: "Raleway", serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  vertical-align: baseline;
  text-transform: capitalize;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
