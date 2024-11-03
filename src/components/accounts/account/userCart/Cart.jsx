import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import CartCard from "../../../cards/cartCard/CartCard";

export const Cart = () => {
  const l = useSelector(state=>state.language.value)
  const cart = useSelector((store) => store.cart);
  console.log(cart, "for testing");
  return (
    <Container className="center">
      {/* <CartCard info={v} key={i}></CartCard>; */}
      {cart.value.length > 0
        ? cart.value.map((v, i) => <CartCard info={v} key={i}></CartCard>)
        : `${
            l == "ENG"
              ? "Your cart is empty"
              : l == "UZB"
              ? "Savat Bo'mbo'sh"
              : "Ваша корзина пуста"
          }`}
    </Container>
  );
};

export default Cart;
