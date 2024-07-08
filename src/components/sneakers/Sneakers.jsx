import React from "react";
import { Container, Content, Main } from "./style";
import background from "../../assets/images/just/sneakers.webp";
import sneakers from "../../assets/images/backgrounds/sneakers.avif";
import "./sneakers.css";
import { useSelector } from "react-redux";
import Button from "../generics/button/Button";
import Title from "../generics/title";
import { PiSneakerThin } from "react-icons/pi";
import { Bunker } from "../generics";
import {
  sneakersBtnconstants,
  sneakersTitleconstants,
} from "../../constants/componentsContants/sneakers";

const Sneakers = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Container img={background} sneakersimg={sneakers}>
        <Content>
          {sneakersTitleconstants.map((v, i) => (
            <Title type={v.s} key={i} color={v?.color} fontWeight={v?.weight}>
              {value == "ENG" ? v.m[0] : value == "RUS" ? v.m[2] : v.m[1]}
            </Title>
          ))}
          <Bunker type="sneakersBtn" className="center">
            {sneakersBtnconstants.map(({ m }, i) => (
              <Button type="black" key={i}>
                {value == "ENG" ? m[0] : value == "RUS" ? m[1] : m[2]}
                <PiSneakerThin size="1.5em" />
              </Button>
            ))}
          </Bunker>
        </Content>
      </Container>
    </Main>
  );
};

export default Sneakers;
