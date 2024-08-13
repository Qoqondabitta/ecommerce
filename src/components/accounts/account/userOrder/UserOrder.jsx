import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import OrderCard from "../../../cards/orderCard/OrderCard";

const UserOrder = () => {
  const purchase = useSelector((store) => store.purchase);
  console.log(purchase, "purchase");
  return (
    <Container>
      {purchase.value.map((v, i) => (
        <OrderCard key={i} info={v}></OrderCard>
      ))}
    </Container>
  );
};

export default UserOrder;
