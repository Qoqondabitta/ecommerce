import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  position: relative;

  @media only screen and (max-width: 1200px) {
    height: fit-content;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: fit-content;
    padding-block: 60px;
    gap: 30px;
  }
`;
export const Left = styled.div`
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const ImgWrapper = styled.div`
  flex: 1;
`;

export const Img = styled.img`
  /* height: 50%; */
  /* width: 50%; */
  /* object-fit: cover; */
  /* object-position: center; */

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  font-style: "DM Serif Display", serif;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CardDetails = styled.p`
  font-size: 14px;
  text-align: start;
  line-height: 25px;
  width: 80%;
  margin-bottom: 5px;
  height: fit-content;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Headline = styled.h3`
  color: ${({ cost }) => (cost ? "rgb(64, 65, 65)" : "grey")};
  font-weight: ${({ cost }) => (cost ? "600" : "400")};
  text-transform: uppercase;
  font-size: 19px;
`;

export const Title = styled.h1`
  margin-block: ${({ cost }) => (cost ? "20px" : "0px")};
  font-weight: ${({ cost }) => (cost ? "600" : "400")};
  font-style: "DM Serif Display", serif;
  color: ${({ cost }) => (cost ? "black" : "rgb(64, 65, 65)")};
  font-size: 40px;
  @media only screen and (max-width: 900px) {
    margin-block: 0px;
  }
`;

export const BtnWrapper = styled.div`
  gap: 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  white-space: nowrap;
  text-align: center;
  color: ${({ add }) => (add ? "black" : "white")};
  background-color: ${({ add }) => (add ? "white" : "black")};
  border: ${({ add }) => (add ? "1px solid black" : "1px solid white")};
  border-radius: 5px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    scale: 0.9;
  }
`;
