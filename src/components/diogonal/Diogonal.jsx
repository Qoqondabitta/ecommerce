import React from "react";
import "./diogonal.css";
import { Container, Long, Main, Parts } from "./styel";
import back from "../../assets/images/bottomCard/back2.jpg";
import back1 from "../../assets/images/bottomCard/back3.avif";
import { useSelector } from "react-redux";
import Button from "../generics/button/Button";

const Diogonal = () => {
  const language = useSelector((store) => store.language);
  return (
    <Main className="center">
      <Container className="center">
        <Long></Long>
        <Parts img={back1} className="center" position="top">
          <Button type="diogonal" right="true">
            {language.value == "ENG"
              ? "Learn More"
              : language.value == "RUS"
              ? "Узнать больше"
              : "Ko'proq Ko'rish"}
          </Button>
        </Parts>
        <Parts img={back}>
          <Button type="diogonal" left="true">
            {language.value == "ENG"
              ? "Learn More"
              : language.value == "RUS"
              ? "Узнать больше"
              : "Ko'proq Ko'rish"}
          </Button>
        </Parts>
      </Container>
    </Main>
  );
};

export default Diogonal;
