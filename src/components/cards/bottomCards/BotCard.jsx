import React, { useState } from "react";
import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./botCard.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";
import { addLike } from "../../../redux/like";
import { useDispatch, useSelector } from "react-redux";

const BotProSliderCard = ({ id, title, desc, img, price, move, color="black" }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch()
  const [list, setList]= useState(null)
  const [display, setDisplay] = useState(true);
  const like = useSelector(store=>store.like)
  const Color = () => {
    setShow(!show);
    // show && addLike({ id, title, desc, img, price, move, color})
  };
  const Display = () => {
    setDisplay(!display);
  };
  return (
    <Container key={id} className={move ? "move" : ""}>
      <Image src={img} alt={title} />
      <Price>{price}</Price>
      {show ? (
        <Heart
          onClick={() => {
            Color();
            dispatch(addLike({ id, title, desc, img, price, move, color }));
            // localStorage.setItem("list", ...like)
            // console.log(like, "checking the like")
            setList(like)
            console.log(list, "list checking");
          }}
          color={color}
          size="1.4em"
          className="heart"
        />
      ) : (
        <Red
          onClick={() => {
            Color();
            // return addLike({ id, title, desc, img, price, move, color });
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
