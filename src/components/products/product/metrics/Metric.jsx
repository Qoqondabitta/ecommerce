import React from "react";
import { BottomBox, Button, Container, MetricsImg, MetricSlider, MetricsWrapper, PreWrapper } from "./metrics";
import boom from "../../../../assets/images/backgrounds/boom.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cart";
import "./metrics.css"
import { setSize } from "../../../../redux/size";
import { useNavigate } from "react-router-dom";

const Metric = ({ mail, photo }) => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
const size = useSelector(store=>store.size.value)
    const SaveProduct = () => {
        dispatch(addToCart(...mail))
        navigate("/account")
  }
  const changeSize = (s) => {
    dispatch(setSize(s))
  }
  return (
    <Container className="column-center">
      <BottomBox className="center">
        Size:{" "}
        <PreWrapper className="center">
          <MetricSlider size="true" className="center sm">
            <MetricsWrapper onClick={()=>changeSize("xs")} className="center">XS</MetricsWrapper>
            <MetricsWrapper onClick={()=>changeSize("s")} className="center">S</MetricsWrapper>
            <MetricsWrapper onClick={()=>changeSize("m")} className="center">M</MetricsWrapper>
            <MetricsWrapper onClick={()=>changeSize("l")} className="center">L</MetricsWrapper>
            <MetricsWrapper onClick={()=>changeSize("xl")} className="center">XL</MetricsWrapper>
            <MetricsWrapper onClick={()=>changeSize("xxl")} className={`${size=="xxl"?"activeSize":""} center`}>XXL</MetricsWrapper>
          </MetricSlider>
        </PreWrapper>
      </BottomBox>
      <BottomBox className="center">
        Color:{" "}
        <MetricSlider className="center sm">
          <MetricsWrapper className="center">red</MetricsWrapper>
          <MetricsWrapper className="center">blue</MetricsWrapper>
          <MetricsWrapper className="center">white</MetricsWrapper>
          <MetricsWrapper className="center">black</MetricsWrapper>
          <MetricsWrapper className="center">grey</MetricsWrapper>
          <MetricsWrapper className="center">green</MetricsWrapper>
        </MetricSlider>
      </BottomBox>
      <Button onClick={SaveProduct} className="center">
        Add To Cart
      </Button>
    </Container>
  );
};

export default Metric;
