import React, { useState } from "react";
import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./likeCard.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";
import { addLike } from "../../../redux/like";

const LikeCard = ({ id, title, desc, img, price, move, color="black" }) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
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
        <Heart onClick={Color} color={color} size="1.4em" className="heartlike" />
      ) : (
        <Red onClick={Color} color="red" size="1.4em" className="heartlike" />
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

export default LikeCard;
