import React, { useRef, useState } from "react";
import { Arrow, Container, Main } from "./style";
import { botCardDetails as product } from "../../../mock/botProductSlider";
import "./botProductSlider.css";
import { FaArrowRight as Right } from "react-icons/fa6";
const BotProSliderCard = React.lazy(() =>
  import("../../cards/bottomCards/BotCard")
);
import { useSelector } from "react-redux";
import { womenBotProducts } from "../../../mock/womenProductScroll";
import { secondPerfumeCategory } from "../../../mock/perfumeProductSlider";

const BotProductSlider = () => {
  const { value } = useSelector((store) => store.language);
  const [digit, setDigit] = useState(0);
  const scrollRef = useRef(null);
  const order = useSelector((store) => store.order.value);
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
    digit < 2 ? setDigit(digit + 1) : digit;
  };
  const SetBack = () => {
    let node = scrollRef.current;
    if (node) {
      node.scrollBy({
        left: "-1100",
        behavior: "smooth",
      });
    }
    digit > 0 ? setDigit(digit - 1) : digit;
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
        {(order == 3
          ? secondPerfumeCategory
          : order == 1
          ? product
          : order == 0
          ? womenBotProducts
          : product
        ).map((v) => (
          <React.Suspense
            key={v.id}
            fallback={<React.Fragment>Loading...</React.Fragment>}
          >
            <BotProSliderCard
              id={v.id}
              price={v.s}
              lists={v}
              desc={
                value == "ENG"
                  ? v.desc[0]
                  : value == "UZB"
                  ? v.desc[1]
                  : v.desc[2]
              }
              title={value == "ENG" ? v.f[0] : value == "UZB" ? v.f[1] : v.f[2]}
              img={v.bg}
              color={v?.c}
              move={move}
            ></BotProSliderCard>
          </React.Suspense>
        ))}
      </Container>
    </Main>
  );
};

export default BotProductSlider;
