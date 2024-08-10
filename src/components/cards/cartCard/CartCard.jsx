import React, { useState } from "react";
import {
  Button,
  Container,
  Left,
  Productimage,
  Right,
  Size,
  Texts,
  Title,
} from "./style";
import boom from "../../../assets/images/backgrounds/boom.png";

const CartCard = ({info}) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("m");
  const [color, setColor] = useState("red");
  console.log(info, "INFO");
  return (
    <Container className="center">
      <Left>
        <Productimage src={info.bg} />
        <Button buy="true">Buy</Button>
      </Left>
      <Right>
        <Title>{ info.f[0]}</Title>
        <Size>
          <Texts width="true">Color: {info.color}</Texts>
          <Button buy="true">Edit</Button>
        </Size>
        <Size>
          <Texts width="true">Size: {info.size}</Texts>
          <Button buy="true">Edit</Button>
        </Size>
        <Size>
          <Button className="center">-</Button>
          <Texts>{quantity}</Texts>
          <Button className="center">+</Button>
        </Size>
        <Button buy="true">Remove From Cart</Button>
      </Right>
    </Container>
  );
};

export default CartCard;
