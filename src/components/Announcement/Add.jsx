import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./style";


const Add = () => {
  const language = useSelector((store) => store.language);
  return (
    <Container>
      {language.value === "ENG"
        ? "Super Deal free shipping for orders over 50$"
        : language.value === "UZB"
        ? "Super Kelishuv 50$ yuqori xaridlarga tekin yetkazib berish"
        : language.value === "RUS"
        ? "Супер скидка бесплатная доставка заказами более 50$"
        : "search"}
      {/* Super Deal free shipping for orders over 50$ */}
    </Container>
  );
};

export default Add;
