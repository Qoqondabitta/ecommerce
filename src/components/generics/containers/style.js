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
        zIndex: "100000000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      };
    default:
      return {};
  }
};

export const Container = styled.div`
  /* margin: 0 auto; */
  ${getBoxStyle}
`;
