import React from "react";
import { Container, Content, Main, Wrapper } from "./style";
import "./triple.css";
import tripleSliderElements from "../../../constants/slideConstants/tripleSliderElements";
import Button from "../../generics/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { TextWrapper, Text, Info } from "../../mini/pokerTextSlider/style.js";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../../redux/collection";
import { pokerSliderKids, pokerSliderPerfume, pokerSliderWomen } from "../../../constants/slideConstants/pokerSliderElements";

const TripleSlider = () => {
  const o = useSelector(store=>store.order.value)
  const dispatch = useDispatch()
  const { value } = useSelector((store) => store.language);
  return (
    <Main className="center">
      <Wrapper className="center">
        {(o==0?pokerSliderWomen:o==2?pokerSliderKids:o==3?pokerSliderPerfume:tripleSliderElements).map((v, i) => (
          <Container key={i} className="center">
            <Content id="content" className={v.player}>
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
              <NavLink to="/collection" style={{textDecoration: "none"}} onClick={()=>dispatch(changeCollection(v.l))}>
                <Button type="gucci">
                  {value == "ENG"
                    ? v.btn[0]
                    : value == "UZB"
                    ? v.btn[1]
                    : v.btn[2]}
                </Button>
              </NavLink>
            </Content>
          </Container>
        ))}
      </Wrapper>
    </Main>
  );
};

export default TripleSlider;
