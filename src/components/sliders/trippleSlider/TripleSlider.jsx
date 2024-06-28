import React from "react";
import { Container, Content, Main, Wrapper } from "./style";
import "./triple.css";
import tripleSliderElements from "../../../constants/slideConstants/tripleSliderElements";
import Button from "../../generics/button/Button";
import { useSelector } from "react-redux";
import { TextWrapper, Text, Info } from "../../mini/pokerTextSlider/style.js";

const TripleSlider = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main className="center">
      <Wrapper className="center">
        {tripleSliderElements.map((v, i) => (
          <Container key={i} className="center">
            <Content className={v.player}>
              <TextWrapper>
                <Text position="left" className="justifyStart textSlides">
                  {v.t.map((val, i) => (
                    <Info key={i} colors={val.color}>
                      {value == "ENG"
                        ? val.scripts[0]
                        : value == "UZB"
                        ? val.scripts[1]
                        : val.scripts[2]}
                    </Info>
                  ))}
                </Text>
              </TextWrapper>
              <Button type="gucci">
                {value == "ENG"
                  ? v.btn[0]
                  : value == "UZB"
                  ? v.btn[1]
                  : v.btn[2]}
              </Button>
            </Content>
          </Container>
        ))}
      </Wrapper>
    </Main>
  );
};

export default TripleSlider;
