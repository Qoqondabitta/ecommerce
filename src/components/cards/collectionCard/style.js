import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "250px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0px;
  background-image: url(${({ bgimg }) => bgimg});
  background-position: ${({ place }) => (place ? place : "top")};
  border-radius: 10px;
  background-repeat: no-repeat;
  border: 2px solid rgb(223, 218, 218);
  z-index: 0;
  background-size: ${({ width }) => width && "cover"};

  @media only screen and (max-width: 600px) {
    width: ${({ width }) => (width ? "100%" : "175px")};
  }
`;

export const Imgs = styled.img`
  width: ${({ width }) => (width ? width : "100%")};
  /* border: 1px solid rgb(223, 218, 218); */
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: ${({ width }) => (width ? "100%" : "173px")};
    height: ${({ width }) => (width ? "264px" : "200px")};
  }
`;

export const Data = styled.div`
  border-top: 2px solid rgb(223, 218, 218);
  background-color: white;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0px;
  padding: 10px 20px 10px 10px;
  height: 70px;
  z-index: 10000000000000000;
`;

export const Subtitle = styled.h3`
  font-size: ${({ main }) => (main ? "16px" : "14px")};
  height: ${({ main }) => (main ? "20px" : "16px")};
  font-weight: ${({ main }) => (main ? "bold" : "400")};
  font-style: "DM Serif Display", serif;
  color: ${({ main }) => (main ? "black" : "grey")};
  overflow: ${({ main }) => (main ? "hidden" : null)};

  @media only screen and (max-width: 600px) {
    font-size: ${({ main }) => (main ? "16px" : "14px")};
  }
`;

export const SubSectitle = styled.p`
  font-size: ${({ main }) => (main ? "16px" : "14px")};
  height: ${({ main }) => (main ? "20px" : "16px")};
  font-weight: ${({ main }) => (main ? "bold" : "400")};
  font-style: "DM Serif Display", serif;
  color: ${({ main }) => (main ? "black" : "grey")};
  overflow: ${({ main }) => (main ? "hidden" : null)};

  @media only screen and (max-width: 600px) {
    font-size: ${({ main }) => (main ? "16px" : "14px")};
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
width: 89%;
  @media only screen and (max-width: 600px) {
    gap: 5px;
  }
`;

export const Icon = styled.div`
  width: 10%;
`;
