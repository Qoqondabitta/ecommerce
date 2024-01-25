import React from "react";
import { Inputs } from "./style";

const Input = ({ children, onClick, type, width, mediaWidth }) => {
  return (
    <Inputs
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
      placeholder={children || "search"}
    />
  );
};

export default Input;
