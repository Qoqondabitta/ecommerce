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
    case "footNavBox":
      return {
        gap: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 30px",
        position: "fixed",
        bottom: "0",
        left: "0",
        background: "white",
        display: "none",
        zIndex: "100000000000000000000000",
      };
    case "grey":
      return {
        gap: "10px",
        height: "fit-content",
        zIndex: "100000000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      };
    case "search":
      return {
        gap: "10px",
        width: "60%",
        zIndex: "100000000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
        padding: "7px 15px",
        borderRadius: "20px",
        display: "none",
        marginBottom: "12px",
      };
    case "searchDrop":
      return {
        gap: "10px",
        width: "fit-content",
        zIndex: "100000000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        background: "white",
        padding: "10px 0px 150px 10px",
        position: "absolute",
        top: "80px",
        right: "5.5%",
      };
    case "searchDropFirst":
      return {
        width: "100%",
        gap: "10px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10px 0px",
      };
    case "searchDropSecond":
      return {
        gap: "60px",
        width: "700px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "10px 25px",
      };
    case "searchDropMedia":
      return {
        width: "100vw",
        height: "100vh",
        zIndex: "1000000000000000000",
        display: "none",
        background: "white"
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
    display: ${({ type }) => (type == "searchDrop" ? null : "flex")};
    width: ${({ type }) => (type == "searchDrop" ? "100%" : null)};
    height: ${({ type }) => (type == "searchDrop" ? "100%" : null)};
    /* top: ${({ type }) => type == "searchDrop" && 0};
    left: ${({ type }) => type == "searchDrop" && 0};
    right: ${({ type }) => type == "searchDrop" && 0};
    bottom: ${({ type }) => type == "searchDrop" && 0}; */
  }
`;
