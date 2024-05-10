import React from "react";
import { Info, Text, TextWrapper } from "./style";
import "../../sliders/kids/kids.css";
import { kid, man } from "../../../constants/textSlider";
import { useSelector } from "react-redux";

const TextSlider = () => {
  const { value } = useSelector((store) => store.order);
  // console.log(order, "eh");
  return (
    <TextWrapper>
      <Text className="justifyStart kid">
        {value == 1
          ? man.map((v, i) => <Info key={i}>{v}</Info>)
          : kid.map((v, i) => <Info key={i}>{v}</Info>)}
      </Text>
    </TextWrapper>
  );
};

export default TextSlider;
