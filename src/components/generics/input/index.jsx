import React from "react";
import { Inputs } from "./style";

const Input = ({ placeholder, onClick, type, width, mediaWidth }) => {
  return (
    <Inputs
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
      placeholder={placeholder}
    />
  );
};

export default Input;
