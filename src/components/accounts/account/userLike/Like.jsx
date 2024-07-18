import React, { useState } from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
// import BotProSliderCard from '../../../cards/bottomCards/BotCard'
import LikeCard from "../../../cards/likeCards/LikeCard";
import CollectionCard from "../../../cards/collectionCard/CollectionCard";

const Like = () => {
  const [move, setMove] = useState(true);
  const { value } = useSelector((store) => store.language);
  const like = useSelector((store) => store.like);
  const [list, setList] = useState(like);
  console.log(like.value, "value");
  return (
    <Container>
      {like.value.map((v) => (
        <LikeCard list={v}></LikeCard>
      ))}
    </Container>
  );
};

export default Like;
