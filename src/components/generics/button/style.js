import { styled, withTheme } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "browse":
      return {
        background:
          "linear-gradient(135deg, rgba(100, 97, 97, 0.5), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
        gap: "3px",
        border: "none",
        width: "130px",
        height: "45px",
        color: "white",
        border: "1px solid white",
        fontWeight: "400",
        fontSize: "14px",
      };
    case "soon":
      return {
        background:
          "linear-gradient(135deg, rgba(100, 97, 97, 0.1), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
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
    case "gucci":
      return {
        background:
          "linear-gradient(135deg, rgba(100, 97, 97, 0.5), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
        // position: "relative",
        fontSize: "14px",
        fontWeight: "400",
        padding: "15px 20px",
        width: "270px",
        cursor: "pointer",
        color: "white",
        border: "1px solid white",
        zIndex: "100000000000000000",
      };
    case "xon":
      return {
        background:
          "linear-gradient(135deg, rgba(100, 97, 97, 0), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
        position: "absolute",
        fontSize: "14px",
        fontWeight: "400",
        padding: "15px 20px",
        width: "270px",
        cursor: "pointer",
        color: "white",
        flex: "1",
        border: "1px solid white",
        zIndex: "100000000000000000",
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
    transform: scale(0.9);
    border: ${({ type }) => (type == "gucci" ? "none" : "none")};
  }
  /* &:active {
    opacity: 0.7;
  } */
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