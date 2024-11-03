import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Left, Productimage, Right, Texts } from "./style";
import boom from "../../../assets/images/backgrounds/boom.png";
import {
  engmonths,
  uzmonths,
  rusmonths,
} from "../../../constants/account/months";

const OrderCard = React.memo(({ info }) => {
  const l = useSelector((store) => store.language.value);
  const time = new Date();
  const day = time.getDate();
  const arrival = day + 7;
  const year = time.getFullYear();
  const month = time.getMonth();
  const sure = day == 31 ? month + 1 : arrival > 30 ? month + 2 : month + 1;
  const dispatch = useDispatch();
  const sort = l == "ENG" ? engmonths : l == "UZB" ? uzmonths : rusmonths;
  return (
    <Container className="column-center">
      <Left className="center">
        <Productimage
          loading="lazy"
          alt="XON Online Store"
          src={info?.bg || boom}
        />
      </Left>
      <Right className="column-center">
        <Texts>
          {l == "ENG"
            ? "Expected Arrival Date"
            : l == "UZB"
            ? "Kelishi Kutilayotgan Sana"
            : "Ожидаемая дата прибытия"}
          : {day == 31 ? day : arrival > 30 ? `0${arrival % 30}` : arrival}/
          {sure == 1
            ? sort[0]
            : sure == 2
            ? sort[1]
            : sure == 3
            ? sort[2]
            : sure == 4
            ? sort[3]
            : sure == 5
            ? sort[4]
            : sure == 6
            ? sort[5]
            : sure == 7
            ? sort[6]
            : sure == 8
            ? sort[7]
            : sure == 9
            ? sort[10]
            : sure == 10
            ? sort[11]
            : sort[12]}
          /{year}
        </Texts>
      </Right>
    </Container>
  );
});

export default OrderCard;
