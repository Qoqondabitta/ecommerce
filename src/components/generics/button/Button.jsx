import React from "react";
import {Button} from "./style"

const Button = ({ children, onClick, type, width, mediaWidth }) => {
  return (
    <Button
      className="center"
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
    >
      {children || "buy"}
    </Button>
  );
};

export default Button;
