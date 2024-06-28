import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100vh;
  background-image: url(${({ backimage }) => backimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding-bottom: 100px;
  position: relative;
  z-index: -1;

  @media only screen and (max-width: 1100px) {
    margin-top: 0px;
    padding-bottom: 80px;
  }
`;
