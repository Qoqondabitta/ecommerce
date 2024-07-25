import React, { useState } from "react";
import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";
// import BotProSliderCard from '../../../cards/bottomCards/BotCard'
import LikeCard from "../../../cards/likeCards/LikeCard";
import CollectionCard from "../../../cards/collectionCard/CollectionCard";
import { changeLike } from "../../../../redux/like";

const Like = () => {
  const dispatch = useDispatch()
  const like = useSelector((store) => store.like);
  // console.log(like.value, "value");
  // let a = []
  // const b = dispatch(changeLike())
  // console.log(b, "it is b");
  // console.log(like.value, "this is value of like");
  // let c = {};
  console.log(like);
  // let sortedList = like.value.filter(v => !a.includes(v.id))
  // console.log(sortedList);
  return (
    <Container>
      {like.value.map((v) => (
      <LikeCard list={v}></LikeCard>
      ))}
    </Container>
  );
};

export default Like;
