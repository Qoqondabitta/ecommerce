import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Left,
  PriceTag,
  Productimage,
  Right,
  Size,
  Texts,
  Title,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../redux/cart";
import PaymentForm from "../../pay/Payment";

const CartCard = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const [list, setList] = useState(info);
  const [newSize, setNewSize] = useState(info.size);
  const [newColor, setNewColor] = useState(info.color);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
const numberValue = parseInt(list.s.replace("$", ""));
  const l = useSelector((store) => store.language.value);
  const changeEdit = () => {
    setEdit(!edit);
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  const changeNewSize = (e) => {
    setNewSize(e.target.value);
  };
  const changeNewColor = (e) => {
    setNewColor(e.target.value);
  };
  const changeQuantity = (sort) => {
    sort == "plus"
      ? setQuantity(quantity + 1)
      : quantity > 0 && setQuantity(quantity - 1);
  };
  const removeItemFromCart = () => {
    dispatch(deleteFromCart(info));
  };
  const editColor = () => {
    setList({ ...list, color: newColor });
  };
  const editSize = () => {
    setList({ ...list, size: newSize });
  };
  return (
    <Container className="center">
      <Left>
        <Productimage src={info.bg} />
        <Button onClick={() => setShow(!show)} buy="true">
          Buy
        </Button>
        {/* </NavLink> */}
      </Left>
      <Right>
        <Title>{info.f[0]}</Title>
        <Size>
          <Texts width="true">Color: {list.color}</Texts>
          {theme && (
            <Input
              name="color"
              onChange={changeNewColor}
              placeholder="type color"
            />
          )}
          <Button
            onClick={() => {
              changeTheme();
              editColor();
            }}
            className="center"
            edit="true"
          >
            {theme ? "Choose" : "Edit"}
          </Button>
        </Size>
        <Size>
          <Texts width="true">Size: {list.size}</Texts>
          {edit && (
            <Input
              name="size"
              onChange={changeNewSize}
              placeholder="type size"
            />
          )}
          <Button
            className="center"
            onClick={() => {
              changeEdit();
              editSize();
            }}
            edit="true"
          >
            {edit ? "Choose" : "Edit"}
          </Button>
        </Size>
        <PriceTag>
          <Size>
            <Button onClick={() => changeQuantity("minus")} className="center">
              -
            </Button>
            <Texts>{quantity}</Texts>
            <Button onClick={() => changeQuantity("plus")} className="center">
              +
            </Button>
          </Size>{" "}
          <Texts width="true">Price: {numberValue * quantity}$</Texts>
        </PriceTag>
        <Button buy="true" onClick={removeItemFromCart}>
          Remove From Cart
        </Button>
      </Right>
      {show && <PaymentForm goods={info} />}
    </Container>
  );
};

export default CartCard;
