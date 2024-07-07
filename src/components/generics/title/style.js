import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
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
    case "sneakersTitle":
      return {
        fontSize: "60px",
        lineHeight: "50px",
        width: "fit-content",
        fontWeight: "600",
        color: "black",
        letterSpacing: "-0.1rem",
        wordSpacing: "0em",
        zIndex: "2000",
        textTransform: "uppercase",
      };
    case "xonTitle":
      return {
        fontSize: "120px",
        lineHeight: "110px",
        width: "fit-content",
        fontWeight: "400",
        // color: "white",
        letterSpacing: "-0.5rem",
        fontFamily: '"DM Serif Display", serif',
        zIndex: "900"
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
        // fontWeight: "400",
        width: "fit-content",
      };
    case "gucci":
      return {
        color: "white",
        fontSize: "32px",
        fontWeight: "400",
        letterSpacing: "0.15rem",
        wordSpacing: "-0.1em",
        width: "100%",
        fontFamily: '"DM Serif Display", serif',
        flex: "1",
        textAlign: "center",
      };
    case "guccixon":
      return {
        color: "white",
        fontSize: "37px",
        fontWeight: "400",
        letterSpacing: "0.15rem",
        wordSpacing: "-0.1em",
        width: "100%",
        fontFamily: '"DM Serif Display", serif',
        flex: "1",
        textAlign: "center",
        zIndex: "101"
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
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${getType};
  transition: all 0.5s;

  @media only screen and (max-width: 1025px) {
    display: ${({ media }) => media && "none"};
    color: ${({color})=>color};
    line-height: ${({ type }) =>
      type == "xonTitle" ? "90px" : type == "videoTitle" ? "39px" : ""};
    letter-spacing: ${({ type }) =>
      type == "videoTitle" ? "-0.2rem" : "0rem"};
    word-spacing: ${({ type }) => type == "videoTitle" && "0rem"};
    font-size: ${({ type }) =>
      type == "xonTitle"
        ? "100px"
        : type == "sneakersTitle"
        ? "50px"
        : type == "gucci"
        ? "30px"
        : type == "videoText"
        ? "14px"
        : type == "videoTitle"
        ? "46px"
        : "18px"};
        width: ${({type})=>type=="videoText"&&"70%"};
  }
  @media only screen and (max-width: 1000px) {
    display: ${({ media }) => media && "none"};
    line-height: ${({ type }) =>
      type == "xonTitle" ? "90px" : type == "videoTitle" ? "23px" : ""};
    letter-spacing: ${({ type }) =>
      type == "videoTitle" ? "-0.2rem" : "0rem"};
    word-spacing: ${({ type }) => type == "videoTitle" && "0rem"};
    font-size: ${({ type }) =>
      type == "xonTitle"
        ? "100px"
        : type == "sneakersTitle"
        ? "45px"
        : type == "gucci"
        ? "30px"
        : type == "videoText"
        ? "14px"
        : type == "videoTitle"
        ? "33px"
            : "18px"};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ type }) =>
      type == "xonTitle"
        ? "60px"
        : type == "gucci" || type == "sneakersTitle"
        ? "30px"
        : type == "videoText"
        ? "12px"
        : type == "videoTitle"
        ? "20px"
        : "18px"};
    font-weight: ${({ type }) => type == "xonTitle" && "20px"};
    letter-spacing: ${({ type }) =>
      type == "xonTitle"
        ? "-0.34rem"
        : type == "videoTitle"
        ? "-0.1rem"
        : "0rem"};
    word-spacing: ${({ type }) => type == "videoTitle" && "0rem"};
    line-height: ${({ type }) =>
      type == "xonTitle"
        ? "80px"
        : type == "videoTitle"
        ? "12px"
        : type == "sneakersTitle"
        ? "20px"
        : ""};
    width: ${({ type }) => type == "videoText" && "fit-content"};
    /* height: ${({ type }) => type == "videoText" && "60px"}; */
  }
`;
