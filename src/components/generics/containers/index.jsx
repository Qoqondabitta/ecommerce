import React from "react";
import { Container as Containers } from "./style";

const Container = ({ children, type, onClick, className }) => {
  return (
    <Containers type={type} onClick={onClick} className={className}>
      {children}
    </Containers>
  );
};

export default Container;
