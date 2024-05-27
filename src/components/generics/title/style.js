import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "signin":
      return {
        color: "#fff",
        background: "red",
        padding: "5px 0px",
      };
    case "xon":
      return {
        fontSize: "14px",
        lineHeight: "14px",
        fontWeight: "600",
        color: "yellow",
      };
    case "online":
      return {
        fontSize: "16px",
        lineHeight: "14px",
        fontWeight: "bold",
        color: "#fff",
      };
    case "store":
      return {
        fontSize: "18px",
        lineHeight: "14px",
        fontWeight: "bold",
        color: "pink",
      };
    case "videoTitle":
      return {
        fontSize: "80px",
        // lineHeight: "14px",
        fontWeight: "900",
        color: "white",
        zIndex: "20000000000000",
        textTransform: "uppercase"
      };
    case "videoText":
      return {
        fontSize: "18px",
        // lineHeight: "14px",
        // fontWeight: "bold",
        color: "white",
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
  }
};

export const Titles = styled.p`
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  ${getType};
  transition: all 0.5s;
/* text-transform: u; */
  @media only screen and (max-width: 1025px) {
    display: ${({ media }) => media && "none"};
  }
`;
