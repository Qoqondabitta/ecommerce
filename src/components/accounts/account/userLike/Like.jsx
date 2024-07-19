import React, { useState } from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
// import BotProSliderCard from '../../../cards/bottomCards/BotCard'
import LikeCard from "../../../cards/likeCards/LikeCard";
import CollectionCard from "../../../cards/collectionCard/CollectionCard";

const Like = () => {
  const like = useSelector((store) => store.like);
  // console.log(like.value, "value");
  // let a = []
  const b = like.value.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );
  // let c = {};
  // console.log(a);
  // let sortedList = like.value.filter(v => !a.includes(v.id))
  // console.log(sortedList);
  return (
    <Container>
      {/* {like.value.map((v) => ( */}
      <LikeCard list={b}></LikeCard>
      {/* ))} */}
    </Container>
  );
};

export default Like;
