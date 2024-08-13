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
  Title,
} from "./style";
import boom from "../../../assets/images/backgrounds/boom.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../redux/cart";
import { NavLink } from "react-router-dom";
import PaymentForm from "../../pay/Payment";

const CartCard = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(info.size);
  const [color, setColor] = useState(info.color);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  const changeEdit = () => {
    setEdit(!edit);
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  const changeInputValues = (e) => {
    e.target.name == "size"
      ? setSize(e.target.value)
      : setColor(e.target.value);
  };
  const changeQuantity = (sort) => {
    sort == "plus"
      ? setQuantity(quantity + 1)
      : quantity > 0 && setQuantity(quantity - 1);
  };
  const removeItemFromCart = () => {
    dispatch(deleteFromCart(info));
  };
  console.log(info, "INFO");
  return (
    <Container className="center">
      <Left>
        <Productimage src={info.bg} />
        {/* <NavLink style={{ textDecoration: "none" }} to="/pay"> */}
          <Button onClick={() => setShow(!show)} buy="true">
            Buy
          </Button>
        {/* </NavLink> */}
      </Left>
      <Right>
        <Title>{info.f[0]}</Title>
        <Size>
          <Texts width="true">Color: {color}</Texts>
          {theme && (
            <Input
              name="color"
              onChange={changeInputValues}
              placeholder="type color"
            />
          )}
          <Button onClick={changeTheme} className="center" edit="true">
            {theme ? "Choose" : "Edit"}
          </Button>
        </Size>
        <Size>
          <Texts width="true">Size: {size}</Texts>
          {edit && (
            <Input
              name="size"
              onChange={changeInputValues}
              placeholder="type size"
            />
          )}
          <Button className="center" onClick={changeEdit} edit="true">
            {edit ? "Choose" : "Edit"}
          </Button>
        </Size>
        <Size>
          <Button onClick={() => changeQuantity("minus")} className="center">
            -
          </Button>
          <Texts>{quantity}</Texts>
          <Button onClick={() => changeQuantity("plus")} className="center">
            +
          </Button>
        </Size>
        <Button buy="true" onClick={removeItemFromCart}>
          Remove From Cart
        </Button>
      </Right>
      {show&&<PaymentForm goods={info} />}
    </Container>
  );
};

export default CartCard;
