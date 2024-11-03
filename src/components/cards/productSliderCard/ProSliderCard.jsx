import React, { useState } from "react";
import { Bottom, Container, H1, Image, P, Price, Shop, Title } from "./style";
import { BsCart as Cart } from "react-icons/bs";
import "./card.css";
import { GoHeart as Heart } from "react-icons/go";
import { BsFillSuitHeartFill as Red } from "react-icons/bs";
import { BsCartPlus as Plus } from "react-icons/bs";
import { hijabstyleconstants } from "../../../constants/componentsContants/collection/women/stylehijab";
import { cardfrank } from "../../../constants/componentsContants/collection/collectionsport";
import { casualkids } from "../../../constants/componentsContants/collection/kids/casualkids";
import { perfumecollection } from "../../../constants/componentsContants/collection/perfume/perfumecollection";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCollection } from "../../../redux/collection";
import { shoes } from "../../../constants/componentsContants/collection/shoes";

const ProSliderCard = React.memo(
  ({ id, title, desc, img, price, move, color }) => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(true);
    const o = useSelector((store) => store.order.value);
    const col =
      o == 0 ? shoes : o == 1 ? shoes : o == 2 ? shoes : perfumecollection;
    const Color = () => {
      setShow(!show);
    };
    const Display = () => {
      setDisplay(!display);
    };
    return (
      <Container key={id} className={move ? "move" : ""}>
        <NavLink
          onClick={() => dispatch(changeCollection(col))}
          style={{ textDecoration: "none" }}
          to="/collection"
        >
          <Image src={img} loading="lazy" alt="XON Online Store" />
        </NavLink>
        <Price>{price}</Price>
        {show ? (
          <Heart onClick={Color} color={color} size="1.4em" className="heart" />
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
  }
);

export default ProSliderCard;
