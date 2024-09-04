import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 9000000000000;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 50px 180px 0px;
  background: #fff;
  border: none;
  gap: 50px;
  transition: all 2s;
  height: 110vh;

  overflow-y: scroll;

  @media only screen and (max-width: 1100px) {
    width: 480px;
    /* left: -5%; */
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    padding: 50px 80px 50px 0px;
    flex-direction: column;
  }

  @media only screen and (max-width: 450px) {
    width: 300px;
  }

  @media only screen and (max-width: 400px) {
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  padding: 0px 50px;
  width: 100%;

  @media only screen and (max-width: 1100px) {
    padding: 0px 20px;
  }
`;

export const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const ContactLinks = styled.a`
  text-transform: capitalize;
  font-size: 18px;
  padding-bottom: 3px;
  display: flex;
  text-decoration: none;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
  color: black;
  gap: 10px;

  @media only screen and (max-width: 600px){
    font-size: 16px;
  }
`;

export const ContactUs = styled.h2`
  font-size: 30px;
  font-family: "Castoro Titling", serif;
  text-transform: uppercase;
  margin-block-end: 20px;
`;

export const Item = styled.p`
  color: black;
  font-family: "Castoro Titling", serif;
  font-size: 16px;
  letter-spacing: 0.05rem;
  font-weight: 500;
  
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
