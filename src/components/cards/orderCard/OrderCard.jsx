import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Left, Productimage, Right, Texts } from "./style";
import boom from "../../../assets/images/backgrounds/boom.png";

const OrderCard = ({info}) => {
    const time = new Date()
    const day = time.getDate()
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  return (
    <Container className="column-center">
      <Left className="center">
        <Productimage src={info?.bg || boom} />
      </Left>
      <Right className="column-center">
        <Texts>
          {l == "ENG"
            ? "Expected Arrival Date"
            : l == "UZB"
            ? "Kelishi Kutilayotgan Sana"
            : "Ожидаемая дата прибытия"}
          : {day + 7}
        </Texts>
      </Right>
    </Container>
  );
};

export default OrderCard;
