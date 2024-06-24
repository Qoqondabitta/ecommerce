import { styled } from "styled-components";
// import boom from "../../assets/images/backgrounds/snekaers.avif"
// import noom from "../../assets/images/backgrounds"
export const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 70px;
  z-index: -1;
  @media only screen and (max-width: 600px) {
    margin-top: 100vh;
    background-image: url(${({ sneakersimg }) => sneakersimg});
    background-position: bottom;
    padding: 20px;
  }
`;

export const Content = styled.div`
height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
