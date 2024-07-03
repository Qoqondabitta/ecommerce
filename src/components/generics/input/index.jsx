import React, { forwardRef } from "react";
import { Inputs } from "./style";

const Input = forwardRef(
  (
    {
      placeholder,
      onClick,
      type,
      width,
      mediaWidth,
      onChange,
      name,
      className,
      defaultValue,
    },
    ref
  ) => {
    return (
      <Inputs
        ref={ref}
        className={className}
        onClick={onClick}
        type={type}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        mediaWidth={mediaWidth}
        width={width}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
