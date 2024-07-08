import React, { useState } from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
// import BotProSliderCard from '../../../cards/bottomCards/BotCard'
import LikeCard from "../../../cards/likeCards/LikeCard";

const Like = () => {
  const [move, setMove] = useState(true);
  const { value } = useSelector((store) => store.language);
  const like = useSelector((store) => store.like);
  const [list, setList] = useState(like);
  console.log(like.value, "like");
  console.log(list, "kist");
  return (
    <Container>
      {list.value.map((v, i) => (
        <LikeCard
          key={v.id}
          id={v.id}
          price={v.price}
          desc={
            value == "ENG" ? v.desc[0] : value == "UZB" ? v.desc[1] : v.desc[2]
          }
          title={
            value == "ENG"
              ? v.title[0]
              : value == "UZB"
              ? v.title[1]
              : v.title[2]
          }
          img={v.img}
          color={v?.color}
          move={move}
        ></LikeCard>
      ))}
    </Container>
  );
};

export default Like;
