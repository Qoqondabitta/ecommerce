import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import OrderCard from "../../../cards/orderCard/OrderCard";

const UserOrder = () => {
  const l = useSelector(state=>state.language.value)
  const purchase = useSelector((store) => store.purchase);
  console.log(purchase, "purchase");
  return (
    <Container>
      {purchase.value.length > 0
        ? purchase.value.map((v, i) => <OrderCard key={i} info={v}></OrderCard>)
        : `${
            l == "ENG"
              ? "There is no order"
              : l == "UZB"
              ? "Buyurtma Yo'q"
              : "Нет заказов"
          }`}
    </Container>
  );
};

export default UserOrder;
