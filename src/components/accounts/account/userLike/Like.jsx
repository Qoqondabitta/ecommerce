import React, { useState } from "react";
import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";
import LikeCard from "../../../cards/likeCards/LikeCard";

const Like = () => {
  const dispatch = useDispatch();
  const l = useSelector((state) => state.language.value);
  const like = useSelector((store) => store.like);
  console.log(like, "liking");
  // console.log(like.map(v=>v), "like");
  return (
    <Container>
      {like.value.length > 0
        ? like.value.map((v, i) => <LikeCard list={v} key={i}></LikeCard>)
        : `${
            l == "ENG"
              ? "There is no any liked products"
              : l == "UZB"
              ? "Yoqtirilgan maxsulotlar yo'q"
              : "Нет понравившихся товаров"
          }`}
    </Container>
  );
};

export default Like;
