import React from "react";
import { Info, Text, TextWrapper } from "./style";
import "./textSlider.css";
import { kid, man, perfume } from "../../../constants/textSlider";
import { useSelector } from "react-redux";

const TextSlider = () => {
  const { value } = useSelector((store) => store.order);
  const language = useSelector((store) => store.language);
  return (
    <TextWrapper>
      <Text className="justifyStart textSlides">
        {value == 1
          ? man.map((v, i) => (
              <Info key={i}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))
          : value == 0
          ? perfume.map((v, i) => (
              <Info key={i}>
                {language.value == "ENG"
                  ? v[0]
                  : language.value == "UZB"
                  ? v[1]
                  : v[2]}
              </Info>
            ))
          : kid.map((v, i) => (
              <Info key={i}>
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
