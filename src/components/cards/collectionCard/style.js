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
    /* margin-bottom: 120px; */
    width: ${({ width }) => (width ? "100%" : "175px")};

    /* height: ${({ width }) => (width ? "264px" : "270px")}; */
  }
  @media only screen and (max-width: 420px) {
    /* width: ${({ width }) => (width ? "100%" : "150px")}; */
    /* height: ${({ width }) => (width ? "233px" : "240px")}; */
  }
  @media only screen and (max-width: 350px) {
    /* width: ${({ width }) => (width ? "100%" : "175px")}; */
    /* height: ${({ width }) => (width ? "197px" : "205px")}; */
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
    width: ${({ width }) => (width ? "100%" : "175px")};
    /* width: ${({ width }) => (width ? "100%" : "85px")}; */
    height: ${({ width }) => (width ? "264px" : "200px")};
  }
  @media only screen and (max-width: 420px) {
    /* width: ${({ width }) => (width ? "100%" : "185px")}; */
    /* height: ${({ width }) => (width ? "233px" : "100px")}; */
  }
  @media only screen and (max-width: 350px) {
    /* width: ${({ width }) => (width ? "100%" : "160px")}; */
    /* height: ${({ width }) => (width ? "197px" : "100px")}; */
  }
`;

export const Data = styled.div`
  border-top: 2px solid rgb(223, 218, 218);
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 3px 20px 10px 10px;
  height: fit-content;
  z-index: 10000000000000000;
`;

export const Subtitle = styled.p`
  font-size: ${({ main }) => (main ? "16px" : "14px")};
  font-weight: ${({main})=>main?"bold":"400"};
  font-style: "DM Serif Display", serif;
  color: ${({main})=>main?"black":"grey"};

  @media only screen and (max-width: 600px){
    font-size: ${({ main }) => (main ? "16px" : "14px")}
  }
`;

export const Desc = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;  
justify-content: flex-start;
  gap: 10px;

  @media only screen and (max-width: 600px){
    gap: 5px;
  }
`;

export const Icon = styled.div`
  /* position: absolute; */
  /* top: 3%; */
  /* right: 3%; */
`;