import React from "react";
import { Buttoning } from "./style";

const Button = ({ children, onClick, type, width, mediaWidth }) => {
  return (
    <Buttoning
      className="center"
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
    >
      {children || "buy"}
    </Buttoning>
  );
};

export default Button;
