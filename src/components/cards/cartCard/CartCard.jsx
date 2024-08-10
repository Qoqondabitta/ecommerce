import React, { useState } from "react";
import {
  Button,
  Container,
  Left,
  Productimage,
  Right,
  Size,
  Texts,
} from "./style";
import boom from "../../../assets/images/backgrounds/boom.png";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("m");
  const [color, setColor] = useState("red");
  return (
    <Container className="center">
      <Left>
        <Productimage src={boom} />
        <Button buy="true">Buy</Button>
      </Left>
      <Right>
        <Size>
          <Texts width="true">Color: {color}</Texts>
          <Button buy="true">Edit</Button>
        </Size>
        <Size>
          <Texts width="true">Size: {size.toUpperCase()}</Texts>
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
