import React from "react";
import {
  BottomBox,
  Button,
  Container,
  MetricSlider,
  MetricsWrapper,
  PreWrapper,
} from "./metrics";
import boom from "../../../../assets/images/backgrounds/boom.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart";
import "./metrics.css";
import { setSize } from "../../../../redux/size";
import { useNavigate } from "react-router-dom";
import {
  paints,
  sizes,
} from "../../../../constants/componentsContants/metrics";
import { setPaint } from "../../../../redux/paint";

const Metric = ({ mail, photo }) => {
  const l = useSelector((store) => store.language.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const size = useSelector((store) => store.size.value);
  const paintColor = useSelector((store) => store.paint.value);
  const SaveProduct = () => {
    dispatch(addToCart(...mail));
    navigate("/account");
  };
  const changeSize = (s) => {
    dispatch(setSize(s));
  };
  const changeColor = (painting) => {
    dispatch(setPaint(painting));
  };
  return (
    <Container className="column-center">
      <BottomBox className="center">
        {l == "ENG" ? "Size" : l == "UZB" ? "O'lcham" : "Pазмер"}:{" "}
        <PreWrapper className="center">
          <MetricSlider size="true" className="center sm">
            {sizes.map((v, i) => (
              <MetricsWrapper
                className={`${size == v.s ? "activeSize" : ""} center`}
                key={i}
                onClick={() => changeSize(v.s)}
              >
                {v.f}
              </MetricsWrapper>
            ))}
          </MetricSlider>
        </PreWrapper>
      </BottomBox>
      <BottomBox className="center">
        {l == "ENG" ? "Color" : l == "UZB" ? "Rang" : "Цвет"}:{" "}
        <MetricSlider className="center sm">
          {paints.map((v, i) => (
            <MetricsWrapper
              onClick={() => changeColor(v.c)}
              className={`${paintColor == v.c && "activeSize"} center`}
              key={i}
            >
              {l == "ENG" ? v.c[0] : l == "UZB" ? v.c[1] : v.c[2]}
            </MetricsWrapper>
          ))}
        </MetricSlider>
      </BottomBox>
      <Button onClick={SaveProduct} className="center">
        {l == "ENG" ? "Add to Cart" : l == "UZB" ? "Saqlash" : "Добавить"}
      </Button>
    </Container>
  );
};

export default Metric;
