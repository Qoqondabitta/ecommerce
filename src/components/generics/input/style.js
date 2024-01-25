import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "search":
      return {
        border: "none",
        outline: "none",
        width: "180px",
        background: "transparent"
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

export const Inputs = styled.input`
  /* width: ${({ width }) => (width ? `${width}px` : "120px")}; */
  font-style: normal;
  font-weight: 400;
  ${getType};
`;
