import { styled, withTheme } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "signin":
      return {
        color: "#fff",
        background: "red",
        padding: "5px 0px",
      };
    case "category":
      return {
        background: "red",
        borderRadius: "5px",
        border: "none",
        gap: "5px",
        width: "150px",
        height: "50px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
      };
    case "browse":
      return {
        background: "white",
        gap: "3px",
        border: "none",
        width: "120px",
        height: "40px",
        color: "black",
        fontWeight: "600",
        fontSize: "16px",
      };
    case "soon":
      return {
        background: "transparent",
        gap: "3px",
        border: "none",
        width: "160px",
        height: "40px",
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        borderRadius: "3px",
        border: "1px solid white",
      };
    case "diogonal":
      return {
        background: "white",
        position: "absolute",
        top: "80%",
        fontSize: "18px",
        fontWeight: "600",
        padding: "10px",
        width: "130px",
        cursor: "pointer",
        border: "1px solid black",
      };
    case "signup":
      return {
        color: "#3a4752",
        background: "yellow",
        borderRadius: "10px",
      };
    default:
      return {
        background: "blue",
        color: "#fff",
        borderRadius: "12px",
      };
      break;
  }
};

export const Buttoning = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  right: ${({ right }) => right && "20%"};
  left: ${({ left }) => left && "5%"}; 
  ${getType};
  transition: all 0.5s;
  &:hover {
    transform: scale(1.15);
  }
  &:active {
    opacity: 0.7;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 12px;
    height: 40px;
    width: 120px;
  }
`;
