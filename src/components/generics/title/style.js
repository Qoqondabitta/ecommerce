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
        fontSize: "65px",
        lineHeight: "55px",
        width: "fit-content",
        fontWeight: "900",
        color: "white",
        letterSpacing: "-0.3rem",
        wordSpacing: "-0.1em",
        zIndex: "2000",
        textTransform: "uppercase",
      };
    case "xonTitle":
      return {
        fontSize: "120px",
        lineHeight: "110px",
        width: "fit-content",
        fontWeight: "400",
        color: "white",
        letterSpacing: "-0.5rem",
        fontFamily: '"DM Serif Display", serif'
// background:"red"
      };
    case "soonTitle":
      return {
        fontSize: "33px",
        lineHeight: "30px",
        width: "fit-content",
        fontWeight: "900",
        color: "white",
        letterSpacing: "-0.1rem",
        wordSpacing: "0.1em",
        zIndex: "2000",
        textTransform: "uppercase",
        marginTop: "20px",
      };
    case "videoText":
      return {
        fontSize: "16px",
        fontWeight: "400",
        width: "fit-content",
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

// macondo geostar
// purple purse
// ribeye marrow