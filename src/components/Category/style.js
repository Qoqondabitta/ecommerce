import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 900000000000000000000000000000000000000000;
  width: 480px;
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

  @media only screen and (max-width: 1300px) {
    /* width: 380px; */
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

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 80px;
  width: 100%;

  @media only screen and (max-width: 1100px) {
    padding: 0px 20px;
  }
`;
// zcool xiaowei

export const Item = styled.li`
  color: black;
  font-family: "Castoro Titling", serif;
  font-size: 24px;
  letter-spacing: 0.05rem;
  font-weight: 500;

  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
