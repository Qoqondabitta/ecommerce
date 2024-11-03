import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin-top: 100px;
  gap: 20px;

  @media only screen and (max-width: 1300px) {
    padding-inline: 20px;
  }
`;

export const ServiceBox = styled.div`
  gap: 30px;
`;

export const ServiceMediaWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 150px;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 40px;
    margin-bottom: 100px;
  }
`;

export const ServiceMediaWrapperChildBox = styled.div`
  gap: 30px;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ServiceImage = styled.img`
  width: 90%;
  height: 90%;
`;

export const TextBunker = styled.div`
  width: 80%;
  gap: 20px;
`;

export const ServiceTableTitle = styled.h1`
  font-size: 35px;
  line-height: 50px;
  font-weight: 400;
  font-family: "Gucci Sans Pro", Helvetica, Arial, sans-serif;
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

export const ServiceGreyStick = styled.div`
  height: 1px;
  width: 200px;
  background-color: grey;
  margin-bottom: 50px;
`;

export const ServiceMediaWrapperChildBoxCutter = styled.div`
  height: 1px;
  width: 280px;
  background-color: grey;
  display: none;

  @media only screen and (max-width: 600px){
    display: block;
  }
`;

export const ServiceThickSmallTitle = styled.p`
  font-size: 15px;
  line-height: 15px;
  font-family: "Raleway", serif;
  font-weight: 700;
  letter-spacing: 0.05rem;
  width: fit-content;
  text-transform: uppercase;
  text-align: center;
`;

export const ServiceNameTitle = styled.h1`
  font-size: 25px;
  line-height: 30px;
  font-weight: 450;
  font-family: "Raleway", serif;
  letter-spacing: 0.1rem;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 390px) {
    line-height: 25px;
    font-weight: 500;
    font-size: 25px;
    width: 100%;
  }
`;

export const ServiceText = styled.p`
  font-size: 15px;
  line-height: 26px;
  font-family: "Raleway", serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
  width: fit-content;
  text-align: center;

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
