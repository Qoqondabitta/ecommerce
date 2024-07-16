import React, { useState } from "react";
import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./botCard.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";
import { addLike } from "../../../redux/like";
import { useDispatch, useSelector } from "react-redux";
import { botCardDetails } from "../../../mock/botProductSlider";

const BotProSliderCard = ({
  id,
  title,
  desc,
  img,
  price,
  move,
  color = "black",
}) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const [display, setDisplay] = useState(true);
  const like = useSelector((store) => store.like);
  let a = [];
  let b = [];
  const Color = () => {
    setShow(!show);
  };
  const Display = () => {
    setDisplay(!display);
  };
  const clickLike = (id) => {
    botCardDetails.map((v, i) => {
      return v.id === id? a.push(v) : b.push(v);
    });
    dispatch(addLike(a));
    console.log(like, id);
  };
  const removeLike = () => {
    a.filter((v) => v.id != id)
    dispatch(addLike(a))
  };
  return (
    <Container key={id} className={move ? "move" : ""}>
      <Image src={img} alt={title} />
      <Price>{price}</Price>
      {show ? (
        <Heart
          onClick={() => {
            Color();
            removeLike()
            setList(like);
          }}
          color={color}
          size="1.4em"
          className="heart"
        />
      ) : (
        <Red
          onClick={() => {
              Color();
              clickLike(id)
          }}
          color="red"
          size="1.4em"
          className="heart"
        />
      )}
      <Shop className="center">
        {display ? (
          <Plus onClick={Display} size="1.3em" />
        ) : (
          <Cart className="" size="1.3em" onClick={Display} />
        )}
      </Shop>
      <Title>
        <H1>{title}</H1>
        <Bottom>
          <P>{desc}</P>
        </Bottom>
      </Title>
    </Container>
  );
};

export default BotProSliderCard;
