import React, { useRef, useState } from "react";
import { Arrow, Container, Main } from "./style";
const ProSliderCard = React.lazy(() => import("../../cards/topCards/TopCard"));
import { topCardDetails as product } from "../../../mock/topProductSlider";
import "./topProductSlider.css";
import { FaArrowRight as Right } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { womenTopProducts } from "../../../mock/womenProductScroll";
import { firstPerfumeCategory } from "../../../mock/perfumeProductSlider";

const TopProductSlider = () => {
  const { value } = useSelector((store) => store.language);
  const [digit, setDigit] = useState(0);
  const order = useSelector((store) => store.order.value);
  const scrollRef = useRef(null);
  const [move, setMove] = useState(true);
  const handleScroll = () => {
    let node = scrollRef.current;
    if (node) {
      node.scrollBy({
        left: "1100",
        behavior: "smooth",
      });
    }
    setDigit(1);
    //  setDigit(digit + 2)
  };
  const SetBack = () => {
    let node = scrollRef.current;
    if (node) {
      node.scrollBy({
        left: "-1100",
        behavior: "smooth",
      });
    }
    setDigit(0);
    //  digit==1||2 ?setDigit(digit - 1) : digit;
  };
  return (
    <Main className="center">
      <Arrow className="center" position="right" onClick={handleScroll}>
        <Right size="1.5em" color="black" />
      </Arrow>
      <Arrow rotate="true" position="left" className="center" onClick={SetBack}>
        <Right size="1.5em" color="black" />
      </Arrow>
      <Container
        ref={scrollRef}
        className="scrollExample"
        position="flex-start"
      >
        {(order == 0
          ? womenTopProducts
          : order == 3
          ? firstPerfumeCategory
          : product
        ).map((v) => (
          <React.Suspense key={v.id} fallback={<React.Fragment>Loading...</React.Fragment>}>
            <ProSliderCard
              id={v.id}
              price={v?.s}
              desc={
                value == "ENG"
                  ? v?.desc[0]
                  : value == "UZB"
                  ? v?.desc[1]
                  : v?.desc[2]
              }
              title={
                value == "ENG" ? v?.f[0] : value == "UZB" ? v?.f[1] : v?.f[2]
              }
              img={v.bg}
              move={move}
              color={v.c}
            ></ProSliderCard>
          </React.Suspense>
        ))}
      </Container>
    </Main>
  );
};

export default TopProductSlider;
