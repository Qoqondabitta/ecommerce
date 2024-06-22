import { styled, withTheme } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "soon":
      return {
        width: "160px",
        height: "40px",
        fontSize: "20px",
      };
    case "gucci":
      return {
        fontSize: "14px",
        padding: "15px 20px",
        width: "270px",
        zIndex: "999999999999"
      };
    case "black":
      return {
        background: "black",
        fontSize: "18px",
        fontWeight: "600",
        padding: "15px 20px",
        color: "white",
        width: "fit-content",
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
  background: ${({ type, backColor }) =>
    type == "soon" || type == "gucci"
      ? "linear-gradient(135deg, rgba(100, 97, 97, 0.5), rgba(255, 255, 255, 0))"
      : backColor};
  backdrop-filter: ${({ type }) =>
    type == "soon" || type == "gucci" ? "blur(10px)" : "none"};
  border: ${({ type }) =>
    type == "soon" || type == "gucci" ? "1px solid white" : "none"};
  color: ${({ type }) =>
    type == "soon" || type == "gucci" ? "white" : "gold"};

  ${getType};
  transition: all 0.5s;
  &:hover {
    transform: scale(0.9);
  }
  @media only screen and (max-width: 1300px) {
    font-size: 12px;
    height: ${({ type }) => type == "browse" && "40px"};
    width: ${({ type }) =>
      type == "gucci" ? "270px" : type == "browse" ? "140px" : "120px"};
  }
  @media only screen and (max-width: 700px) {
    width: ${({ type }) =>
      type == "gucci" ? "200px" : type == "browse" ? "80px" : "120px"};
    font-size: ${({ type }) => (type == "gucci" ? "10px" : "10px")};
    padding: ${({ type }) =>
      type == "gucci" ? "10px" : type == "browse" ? "5px" : "14px"};
    height: ${({ type }) => type == "browse" && "25px"};
  }
`;