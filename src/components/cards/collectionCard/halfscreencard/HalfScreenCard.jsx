import React from "react";
import { Container } from "./style";
import { Subtitle } from "../style";
import { useSelector } from "react-redux";

const HalfScreenCard = React.memo(({ item }) => {
  const { value } = useSelector((store) => store.language);
  return (
    <>
      {item.map((v, i) => (
        <Container bgimg={v.bgimg}>
          <Subtitle underline="true">
            {value == "ENG" ? v.s[0] : value == "UZB" ? v.s[1] : v.s[2]}
          </Subtitle>
        </Container>
      ))}
    </>
  );
});

export default HalfScreenCard;
