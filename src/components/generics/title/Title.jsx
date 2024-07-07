import React from "react";
import { Titles } from "./style";

const Title = ({
  children,
  onClick,
  type,
  width,
  mediaWidth,
  media,
  fontSize,
  color,
  fontWeight,
  // colors
}) => {
  return (
    <Titles
      fontWeight={fontWeight}
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
