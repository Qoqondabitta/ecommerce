import React from "react";
import { Info, Text, TextWrapper } from "./style";
import "./textSlider.css";
import { kid, man, perfume, woman } from "../../../constants/textSlider";
import { useSelector } from "react-redux";

const TextSlider = () => {
  const { value } = useSelector((store) => store.order);
  const language = useSelector((store) => store.language);
  return (
    <TextWrapper>
      <Text className="justifyStart textSlides">
        {value == 1
          ? man.map((v, i) => (
              <Info key={i} colors={v[3]}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))
          : value == 0
          ? perfume.map((v, i) => (
              <Info key={i} colors={v[3]}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))
          : value == 2
          ? kid.map((v, i) => (
              <Info key={i} colors={v[3]}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))
          : woman.map((v, i) => (
              <Info key={i} colors={v[3]}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))}
      </Text>
    </TextWrapper>
  );
};

export default TextSlider;
