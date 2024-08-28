import React, { useRef, useState } from "react";
import { Arrow, Container, Main } from "./style";
import ProSliderCard from "../../cards/productSliderCard/ProSliderCard";
import { ProductCardDetails as product } from "../../../mock/productSliderMock";
import "./productSlider.css";
import { FaArrowRight as Right } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { thirdPerfumeCategory } from "../../../mock/perfumeProductSlider";

const ProductSlider = () => {
  const { value } = useSelector((store) => store.language);
  const order = useSelector((store) => store.order.value);
  const [digit, setDigit] = useState(0);
  const scrollRef = useRef(null);
  const [move, setMove] = useState(true);
  const handleScroll = () => {
    console.log(scrollRef);
    let node = scrollRef.current;
    if (node) {
      node.scrollBy({
        left: "1100",
        behavior: "smooth",
      });
    }
    // digit < 2 ? setDigit(digit + 1) : digit;
  };
  const SetBack = () => {
    let node = scrollRef.current;
    if (node) {
      node.scrollBy({
        left: "-1100",
        behavior: "smooth",
      });
    }
    // digit > 0 ? setDigit(digit - 1) : digit;
  };
  return (
    <Main className="center">
      <Arrow className="center" position="right" onClick={handleScroll}>
        <Right size="1.5em" color="black" />
      </Arrow>
      {/* {digit != 0 && ( */}
      <Arrow rotate="true" position="left" className="center" onClick={SetBack}>
        <Right size="1.5em" color="black" />
      </Arrow>
      {/* )} */}
      <Container
        ref={scrollRef}
        className="scrollExample"
        position="flex-start"
      >
        {(order == 3 ? thirdPerfumeCategory : product).map(
          ({ id, f, bg, desc, s }) => (
            <ProSliderCard
              key={id}
              id={id}
              price={s}
              desc={
                value == "ENG" ? desc[0] : value == "UZB" ? desc[1] : desc[2]
              }
              title={
                value == "ENG" ? f[0] : value == "UZB" ? f[1] : f[2]
              }
              img={bg}
              move={move}
            ></ProSliderCard>
          )
        )}
      </Container>
    </Main>
  );
};

export default ProductSlider;
