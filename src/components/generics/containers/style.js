import styled from "styled-components";

const getBoxStyle = ({ type }) => {
  switch (type) {
    case "soon":
      return {};
    case "burger":
      return {
        background: "white",
        height: "500px",
      };

    case "sneakersBtn":
      return {
        gap: "20px",
        width: "100%",
        display: "flex",
      };
    case "grey":
      return {
        gap: "10px",
        height: "fit-content",
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      };
    case "searchDropFirst":
      return {
        width: "100%",
        gap: "10px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10px 0px 0px 0px",
      };
    case "searchDropSecond":
      return {
        gap: "60px",
        width: "700px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 25px",
        background: "white"
      };
    case "searchDropMedia":
      return {
        gap: "15px",
        zIndex: "1000000000000000000",
        display: "none",
        flexWrap: "wrap",
        width: "60%",
        background: "white",
      };
    case "searchSuggestions":
      return {
        width: "100%",
        gap: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        zIndex: "1000000000000",
      };
    default:
      return {};
  }
};``

export const Container = styled.div`
  border: none;
  ${getBoxStyle};

  @media only screen and (max-width: 1100px) {
    flex-direction: ${({ type }) => (type == "sneakersBtn" ? "column" : "")};
    gap: ${({ type }) => (type == "sneakersBtn" ? "20px" : "")};
  }
  @media only screen and (max-width: 600px) {
    flex-direction: ${({ type }) => (type == "sneakersBtn" ? "column" : "")};
    gap: ${({ type }) => (type == "sneakersBtn" ? "10px" : "")};
    /* display: "flex"; */
    display: ${({ type }) =>
      type == "searchDrop"
        ? null
        : type == "searchDropSecond"
        ? "none"
        : "flex"};
    width: ${({ type }) => (type == "searchDrop" ? "100vw" : null)};
    height: ${({ type }) => (type == "searchDrop" ? "100vh" : null)};
    flex-wrap: ${({ type }) => (type == "searchDrop" ? "wrap" : null)};
    gap: ${({ type }) => (type == "searchDrop" ? "15px" : null)};
    top: ${({ type }) => type == "searchDrop" && 0};
    left: ${({ type }) => type == "searchDrop" && 0};
    right: ${({ type }) => type == "searchDrop" && 0};
    bottom: ${({ type }) => type == "searchDrop" && 0};
  }
`;
