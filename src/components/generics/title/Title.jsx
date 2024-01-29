import React from "react";
import { Titles } from "./style";

const Title = ({ children, onClick, type, width, mediaWidth, media }) => {
  return (
    <Titles
      onClick={onClick}
      type={type}
      media={media}
      mediaWidth={mediaWidth}
      width={width}
    >
      {children || "buy"}
    </Titles>
  );
};

export default Title;
