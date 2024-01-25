import React from "react";
import { Title } from "./style";

const Title = ({ children, onClick, type, width, mediaWidth }) => {
  return (
    <Title
      className="center"
      onClick={onClick}
      type={type}
      mediaWidth={mediaWidth}
      width={width}
    >
      {children || "buy"}
    </Title>
  );
};

export default Title;
