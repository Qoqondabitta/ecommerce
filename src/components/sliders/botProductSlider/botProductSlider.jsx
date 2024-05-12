import React, { useRef, useState } from "react";
import { Arrow, Container, Main } from "./style";
import { botCardDetails as product } from "../../../mock/botProductSlider";
import "./botProductSlider.css";
import { FaArrowRight as Right } from "react-icons/fa6";
import BotProSliderCard from "../../cards/bottomCards/BotCard";
import { useSelector } from "react-redux";

const BotProductSlider = () => {
  const { value } = useSelector((store) => store.language);
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
        <Arrow
          rotate="true"
          position="left"
          className="center"
          onClick={SetBack}
        >
          <Right size="1.5em" color="black" />
        </Arrow>
      {/* )} */}
      <Container
        ref={scrollRef}
        className="scrollExample"
        position="flex-start"
      >
        {product.map((v) => (
          <BotProSliderCard
            key={v.id}
            id={v.id}
            price={v.price}
            desc={value == "ENG" ? v.desc[0] : value == "UZB" ? v.desc[1] : v.desc[2]}
            title={
              value == "ENG"
                ? v.title[0]
                : value == "UZB"
                ? v.title[1]
                : v.title[2]
            }
            img={v.img}
            color={v?.color}
            move={move}
          ></BotProSliderCard>
        ))}
      </Container>
    </Main>
  );
};

export default BotProductSlider;
