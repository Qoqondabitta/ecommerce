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
import { NavLink } from "react-router-dom";

const BotProSliderCard = ({
  id,
  title,
  desc,
  img,
  price,
  move,
  color = "black",
  lists,
}) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const [display, setDisplay] = useState(true);
  const like = useSelector((store) => store.like);
  const Color = () => {
    setShow(!show);
  };
  const Display = () => {
    setDisplay(!display);
  };
  const clickLike = (id) => {
    dispatch(addLike(lists));
    console.log(lists);
  };
  console.log(lists, "outside");

  const removeLike = () => {};
  return (
    <Container key={id} className={move ? "move" : ""}>
      <NavLink to={`/collection`}>
        <Image src={img} alt={title} />
      </NavLink>
      <Price>{price}</Price>
      {show ? (
        <Heart
          onClick={() => {
            Color();
            clickLike(id);
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
            removeLike();
          }}
          color="red"
          size="1.4em"
          className="heart"
        />
      )}
      <Shop className="center">
        {display ? (
          <Plus onClick={Display} size="1.4em" />
        ) : (
          <Cart className="" size="1.4em" onClick={Display} />
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
