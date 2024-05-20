import React from "react";
import {
  Container,
  Info,
  Text,
  TextWrapper,
} from "./style";
import "./poker.css";
import { useSelector } from "react-redux";
import {
  sport,
  classic,
  casual,
  formal,
} from "../../../constants/pokerTextSlider";

const PokerTextSlider = () => {
  const language = useSelector((store) => store.language);
  return (
    <Container className="center">
      <TextWrapper className="">
        <Text position="left" className="justifyStart textSlides">
          {sport.map((v, i) => (
            <Info key={i} colors={v.color}>
              {language.value == "ENG"
                ? v.scripts[0]
                : language.value == "UZB"
                ? v.scripts[1]
                : v.scripts[2]}
            </Info>
          ))}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text position="left" className="start textSlides">
          {classic.map((v, i) => (
            <Info key={i} colors={v.color}>
              {language.value == "ENG"
                ? v.scripts[0]
                : language.value == "UZB"
                ? v.scripts[1]
                : v.scripts[2]}
            </Info>
          ))}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text position="left" className="start textSlides">
          {casual.map((v, i) => (
            <Info key={i} colors={v.color}>
              {language.value == "ENG"
                ? v.scripts[0]
                : language.value == "UZB"
                ? v.scripts[1]
                : v.scripts[2]}
            </Info>
          ))}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text position="left" className="start textSlides">
          {formal.map((v, i) => (
            <Info key={i} colors={v.color}>
              {language.value == "ENG"
                ? v.scripts[0]
                : language.value == "UZB"
                ? v.scripts[1]
                : v.scripts[2]}
            </Info>
          ))}
        </Text>
      </TextWrapper>
    </Container>
  );
};

export default PokerTextSlider;
