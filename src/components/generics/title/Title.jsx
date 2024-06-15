import React from "react";
import { Titles } from "./style";

const Title = ({ children, onClick, type, width, mediaWidth, media, fontSize, color }) => {
  return (
    <Titles
      onClick={onClick}
      type={type}
      color={color}
      media={media}
      mediaWidth={mediaWidth}
      fontSize={fontSize}
      width={width}
    >
      {children || "buy"}
    </Titles>
  );
};

export default Title;