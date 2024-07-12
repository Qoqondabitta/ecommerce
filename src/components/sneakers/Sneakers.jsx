import React from "react";
import { Container, Content, Main } from "./style";
import background from "../../assets/images/just/sneakers.webp";
import sneakers from "../../assets/images/backgrounds/sneakers.avif";
import "./sneakers.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../generics/button/Button";
import Title from "../generics/title";
import { PiSneakerThin } from "react-icons/pi";
import { Bunker } from "../generics";
import {
  sneakersBtnconstants,
  sneakersTitleconstants,
} from "../../constants/componentsContants/sneakers";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";
import { shoes } from "../../constants/componentsContants/collection/shoes";

const Sneakers = () => {
  const dispatch = useDispatch()
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
          <Bunker type="sneakersBtn" className="justifyStart">
            {sneakersBtnconstants.map(({ m }, i) => (
              <NavLink style={{ textDecoration: "none" }} to="/collection">
                <Button
                  type="black"
                  key={i}
                  onClick={() => dispatch(changeCollection(shoes))}
                >
                  {value == "ENG" ? m[0] : value == "RUS" ? m[1] : m[2]}
                  <PiSneakerThin size="1.5em" />
                </Button>
              </NavLink>
            ))}
          </Bunker>
        </Content>
      </Container>
    </Main>
  );
};

export default Sneakers;
