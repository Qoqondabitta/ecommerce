import React from "react";
import { Container } from "./style";
import xonBackground from "../../assets/images/just/main.jpg";
import Button from "../generics/button/Button";
import Title from "../generics/title/Title";
// import { Content } from "../most/style";
import { Blur } from "../video/style";
import {Bunker} from "../generics";

const Genders = () => {
  return (
    <Container className="alignEnd" backimage={xonBackground}>
      <Blur></Blur>
      <Bunker type="grey" className="columnCenter">
        <Title type="guccixon">XON Suits</Title>
        <Button type="gucci">EXPLORE SUITS</Button>
      </Bunker>
    </Container>
  );
};

export default Genders;
