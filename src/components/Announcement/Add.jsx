import React from "react";
import { useSelector } from "react-redux";
import { Container, Main } from "./style";


const Add = () => {
  const language = useSelector((store) => store.language);
  return (
    <Main>
      <Container className="center">
        {language.value === "ENG"
          ? "Super Deal free shipping for orders over 1000$"
          : language.value === "UZB"
          ? "Super Kelishuv 1000$ yuqori xaridlarga tekin yetkazib berish"
          : language.value === "RUS"
          ? "Супер скидка бесплатная доставка заказами более 1000$"
          : "search"}
        {/* Super Deal free shipping for orders over 50$ */}
      </Container>
    </Main>
  );
};

export default Add;
