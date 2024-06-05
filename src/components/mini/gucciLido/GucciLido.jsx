import React from "react";
import { Container } from "./style";
import { Button } from "../../generics/button/Button";
import { useSelector } from "react-redux";
import {
  exploreKids,
  exploreMen,
  explorePerfumes,
  exploreWomen,
} from "../../../constants/buttonConstants/buttonConstants";

const GucciLido = () => {
  const { value } = useSelector((store) => store.language);
  const order = useSelector((store) => store.order);
  return (
    <Container>
      {(order.value == 0
        ? exploreWomen
        : order.value == 1
        ? exploreMen
        : order.value == 2
        ? exploreKids
        : explorePerfumes
      ).map((v, i) => (
        <Button key={i}>
          {value == "ENG" ? v[0] : value == "UZB" ? v[1] : v[2]}
        </Button>
      ))}
    </Container>
  );
};

export default GucciLido;
