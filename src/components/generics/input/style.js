// import { MdPadding } from "react-icons/md";
import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "search":
      return {
        border: "none",
        outline: "none",
        // width: "50%",
        background: "white",
        color: "black",
        borderRadius: "5px",
      };
    case "mainSearch":
      return {
        width: "90%",
        background: "transparent",
        border:"none",
        borderBottom: "1px solid grey",
        padding: "5px 0px",
        fontSize: "16px",
        outline: "none",
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
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  font-style: normal;
  font-weight: 600;
  ${getType};

  &::placeholder {
    color: black;
  }
`;
