import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import CartCard from "../../../cards/cartCard/CartCard";

export const Cart = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart, "for testing");
  return (
    <Container className="center">
      {/* <CartCard info={v} key={i}></CartCard>; */}
      {cart.value.map((v, i) => (
        <CartCard info={v} key={i}></CartCard>
      ))}
    </Container>
  );
};

export default Cart;
