import React from "react";
import { Container, Heading } from "./style";
import { useSelector } from "react-redux";
import { textSliderHeading } from "../../../constants/pokerTextSlider";

const TripleHeadings = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Container className="">
      {textSliderHeading.map((v, i) => (
        <Heading key={i}>
          {value == "ENG" ? v[0] : value == "UZB" ? v[1] : v[2]}
        </Heading>
      ))}
    </Container>
  );
};

export default TripleHeadings;
