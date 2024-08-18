import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Price = styled.p`
  padding: 2px;
  position: absolute;
  top: 66%;
  left: 2%;
  background-color: white;
  font-size: 17px;
  padding: 3px 7px;
  padding-bottom: 9px;
  font-weight: 400;
  transition: all 0.5s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 300px;
  position: relative;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    ${Price} {
      transform: translateY(-15px) translateX(5px);
    }
  }

  @media only screen and (max-width: 600px){
    align-items: center;
  }
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

export const Title = styled(Container)`
  gap: 15px;
  padding: 0px 10px 10px 10px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
`;
export const P = styled.p`
  color: grey;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Shop = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  top: 88%;
  right: 0.5%;
  padding: 10px 12px;
  cursor: pointer;
  z-index: 500000;
`;

export const Icon = styled.div`
  width: 10%;
`;


export const Imgs = styled.img`
width: 299px;
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
