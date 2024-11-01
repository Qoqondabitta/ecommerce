import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: 20px;
  padding-inline: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 50px;
  line-height: 55px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 400;
  margin-block: 80px;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 32px;
    margin-block: 50px;
  }
`;

export const AboutBanner = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    height: 450px;
    margin-bottom: 50px;
  }
`;

export const AboutText = styled.p`
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 10px;
  width: 70%;
  font-family: "Raleway", serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-transform: capitalize;
  text-align: center;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const AboutHelp = styled(AboutTitle)`
  font-size: 25px;
  line-height: 25px;
  font-family: 400;
  font-family: "Raleway";
  letter-spacing: 0.05rem;
  margin: 80px 0px 30px 0px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 24px;
  }
`;

export const AboutFind = styled(AboutTitle)`
  font-family: 400;
  font-size: 30px;
  line-height: 50px;
  font-weight: 350;
  width: 70%;
  text-transform: none;
  font-family: "Raleway";
  letter-spacing: 0.1rem;
  margin: 0px 0px 30px 0px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    line-height: 40px;
  }
  @media only screen and (max-width: 600px) {
    /* width: 100%; */
    font-size: 25px;
    line-height: 32px;
  }
`;
