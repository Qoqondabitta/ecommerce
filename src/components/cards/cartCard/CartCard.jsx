import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Left,
  Productimage,
  Right,
  Size,
  Texts,
} from "./style";
import { useDispatch, useSelector } from "react-redux";

const CartCard = ({ info }) => {
  const [edit, setEdit] = useState(false);
  const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
  const { id, f, s, bg } = info;
    console.log(id);
  const dispatch = useDispatch();
  const languge = useSelector((store) => store.languge.value);
 console.log(info, "cart");
    const changeSize = (e) => {
    setSize(e.target.value);
  };
  const changeEdit = () => {
    setEdit(!edit);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <Container>
      <Left>
        <Productimage src={info.bg} />
        <Button buy="true">
          {languge == "ENG"
            ? "Buy"
            : languge == "UZB"
            ? "Harid Qilmoq"
            : "Kupit"}
        </Button>
      </Left>
      <Right>
        <Texts main="true">
          {languge == "ENG"
            ? info.f[0]
            : languge == "UZB"
            ? info.f[1]
            : info.f[2]}
        </Texts>
        <Size>
          {edit ? (
            <Input placeholder="Type Size" onChange={changeSize} />
          ) : (
            <Texts>
              {languge == "ENG"
                ? "Size"
                : languge == "UZB"
                ? "O'lcham"
                : "Razmer"}
              :{size}
            </Texts>
          )}
          {edit ? (
            <Button onClick={changeEdit}>
              {languge == "ENG"
                ? "Choose"
                : languge == "UZB"
                ? "Tanlamoq"
                : "Vibrat"}
            </Button>
          ) : (
            <Button onClick={changeEdit}>
              {languge == "ENG"
                ? "Edit"
                : languge == "UZB"
                ? "O'zgartirish"
                : "Izmenit"}
            </Button>
          )}
        </Size>
        <Size>
          <Button onClick={addQuantity}>+</Button>
          <Texts>{quantity}</Texts>
          <Button onClick={minusQuantity}>-</Button>
        </Size>
      </Right>
    </Container>
  );
};

export default CartCard;
