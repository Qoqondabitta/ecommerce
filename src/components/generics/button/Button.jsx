import React from "react";
import { Buttoning } from "./style";

const Button = ({ children, onClick, type, width, mediaWidth, left, right }) => {
  return (
    <Buttoning
      className="center"
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
      left={left}
      right={right}
    >
      {children || "buy"}
    </Buttoning>
  );
};

export default Button;
