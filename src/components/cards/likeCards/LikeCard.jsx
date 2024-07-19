import React, { useState } from "react";
// import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./likeCard.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";
import { addLike } from "../../../redux/like";
import { Container, Data, Desc, Icon, Imgs, Subtitle } from "../collectionCard/style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillSuitHeartFill as RedHeart } from "react-icons/bs";


const LikeCard = ({list }) => {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const {value} = useSelector(store=>store.language)
  const Color = () => {
    setShow(!show);
  };
  const Display = () => {
    setDisplay(!display);
  };
  return (
    <>
      {list.map((v, i) => (
        <Container key={i}>
          <NavLink to={`/collection/${v.id}`}>
            <Imgs src={v?.bg} />
          </NavLink>
          <Data>
            <Desc>
              <Subtitle main="true">Air Force</Subtitle>
              <Subtitle className="center">
                {value == "ENG"
                  ? "Price: "
                  : value == "UZB"
                  ? "Narx: "
                  : "Sena: "}
                <Subtitle main="true"> {v.s}</Subtitle>
              </Subtitle>
            </Desc>
            <Icon className="cursor" onClick={() =>{ Color()}}>
              {show ? (
                <RedHeart color="red" size="1.4rem" />
              ) : (
                <Heart color="black" size="1.4rem" />
              )}
            </Icon>
          </Data>
        </Container>
      ))}
    </>
  );
};

export default LikeCard;
