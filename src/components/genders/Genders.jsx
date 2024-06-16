import React from "react";
import { Container } from "./style";
import xonBackground from "../../assets/images/just/main.jpg";
import Button from "../generics/button/Button";
import Title from "../generics/title/Title";
import { Content } from "../most/style";

const Genders = () => {
  return (
    <Container className="alignEnd" backimage={xonBackground}>
      <Content className="columnAlignEnd">
        <Title type="guccixon">XON Suits</Title>
        <Button type="gucci">EXPLORE SUITS</Button>
      </Content>
    </Container>
  );
};

export default Genders;
