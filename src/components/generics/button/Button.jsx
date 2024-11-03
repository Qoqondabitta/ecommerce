import React from "react";
import { Buttoning } from "./style";

const Button = React.memo(
  ({ children, onClick, type, width, mediaWidth, left, right, backColor }) => {
    return (
      <Buttoning
        className="center"
        onClick={onClick}
        type={type}
        mediaWidth={mediaWidth}
        width={width}
        left={left}
        backColor={backColor}
        right={right}
      >
        {children || "buy"}
      </Buttoning>
    );
  }
);

export default Button;
