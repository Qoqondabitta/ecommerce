import styled from "styled-components";

const getBoxStyle = ({ type }) => {
  switch (type) {
    case "soon":
      return {};
    default:
      return {};
  }
};

export const Container = styled.div`
  margin: 0 auto;
  ${getBoxStyle};
`;
