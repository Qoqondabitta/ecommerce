import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "330px")};
  height: 423px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* padding-bottom: 30px; */
  position: relative;
  background-color: white;
  background-image: url(${({ bgimg }) => bgimg});
  background-position: ${({ place }) => (place ? place : "top")};
  background-repeat: no-repeat;
  border: 1px solid rgb(223, 218, 218);
  z-index: 0;
  background-size: ${({ width }) => width && "cover"};
  &:hover {
    background-image: url(${({ alternative }) => alternative});
    background-position: ${({ position }) => position};
    margin-bottom: ${({ width }) => !width && "100px"};
  }

  @media only screen and (max-width: 600px) {
    width: ${({ width }) => (width ? "100%" : "210px")};
    height: ${({ width }) => (width ? "264px" : "270px")};
  }
  @media only screen and (max-width: 420px) {
    width: ${({ width }) => (width ? "100%" : "185px")};
    height: ${({ width }) => (width ? "233px" : "240px")};
  }
  @media only screen and (max-width: 350px) {
    width: ${({ width }) => (width ? "100%" : "160px")};
    height: ${({ width }) => (width ? "197px" : "205px")};
  }
`;

export const Data = styled.div`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-block: 10px;
  height: 110px;
  padding-bottom: 10px;
  display: none;
  z-index: 10000000000000000;

  ${Container}:hover & {
    display: ${({ width }) => !width && "flex"};
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-style: "DM Serif Display", serif;
  padding-bottom: 2px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
`;

export const Image = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: center;
`;
