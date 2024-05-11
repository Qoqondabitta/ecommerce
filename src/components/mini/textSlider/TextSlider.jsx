import React from "react";
import { Info, Text, TextWrapper } from "./style";
import "./textSlider.css";
import { kid, man } from "../../../constants/textSlider";
import { useSelector } from "react-redux";

const TextSlider = () => {
  const { value } = useSelector((store) => store.order);
  // console.log(order, "eh");
  return (
    <TextWrapper>
      <Text className="justifyStart textSlides">
        {value == 1
          ? man.map((v, i) => <Info key={i}>{v}</Info>)
          : kid.map((v, i) => <Info key={i}>{v}</Info>)}
      </Text>
    </TextWrapper>
  );
};

export default TextSlider;
