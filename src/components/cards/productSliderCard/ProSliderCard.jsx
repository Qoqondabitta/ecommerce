import React, { useState } from "react";
import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./card.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";

const ProSliderCard = ({ id, title, desc, img, price, move }) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const Color = () => {
    setShow(!show);
  };
  const Display = () => {
    setDisplay(!display);
  };
    return (
        <Container key={id} className={move ? "move"  : ""}>
      <Image src={img} alt={title} />
      <Price>{price}</Price>
      {show ? (
        <Heart onClick={Color} color="" size="1.4em" className="heart" />
      ) : (
        <Red onClick={Color} color="red" size="1.4em" className="heart" />
      )}
      <Shop className="center">
        {display ? (
          <Plus onClick={Display} color="" size="1.4em" />
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

export default ProSliderCard;
