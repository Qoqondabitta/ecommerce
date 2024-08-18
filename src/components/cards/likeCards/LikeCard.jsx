import React, { useState } from "react";
import "./likeCard.css";
import { GoHeart as Heart } from "react-icons/go";
import { addLike, removeLike } from "../../../redux/like";
import { Container, Data, Desc, Icon, Imgs, Subtitle } from "./style";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSuitHeartFill as RedHeart } from "react-icons/bs";

const LikeCard = ({ list }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.language);
  const dislikeProduct = () => {
    setShow(!show);
    dispatch(removeLike(list));
  };
  const LikeProduct = () => {
    setShow(!show);
    dispatch(addLike(list));
  };
  return (
    <>
      <Container key={list.id}>
        <NavLink to={`/collection/${list.id}`}>
          <Imgs src={list?.bg} />
        </NavLink>
        <Data>
          <Desc>
            <Subtitle main="true">
              {value == "ENG"
                ? list.f[0]
                : value == "UZB"
                ? list.f[1]
                : list.f[2]}
            </Subtitle>
            <Subtitle className="center">
              {value == "ENG"
                ? "Price: "
                : value == "UZB"
                ? "Narx: "
                : "Sena: "}
              <Subtitle main="true"> {list.s}</Subtitle>
            </Subtitle>
          </Desc>
          <Icon className="cursor">
            {show ? (
              <RedHeart color="red" onClick={dislikeProduct} size="1.4rem" />
            ) : (
              <Heart onClick={LikeProduct} color="black" size="1.4rem" />
            )}
          </Icon>
        </Data>
      </Container>
    </>
  );
};

export default LikeCard;
