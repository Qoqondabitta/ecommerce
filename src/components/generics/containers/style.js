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
    default:
      return {};
  }
};

export const Container = styled.div`
  margin: 0 auto;
  ${getBoxStyle};
`;
