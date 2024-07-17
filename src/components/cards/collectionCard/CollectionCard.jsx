import React, { useState } from "react";
import { Container, Data, Desc, Icon, Imgs, Subtitle } from "./style";
import { GoHeart as Heart } from "react-icons/go";
import cardimg from "../../../assets/images/collection/men/collectioncard10.jpeg";
import cardimg2 from "../../../assets/images/collection/men/collectioncard10alternative.webp";
import { useDispatch, useSelector } from "react-redux";
import { collectioncardconstants } from "../../../constants/componentsContants/collection/collection";
import { NavLink } from "react-router-dom";
import { addLike } from "../../../redux/like";

const CollectionCard = ({ list }) => {
  const { value } = useSelector((store) => store.language);
  const like = useSelector((store) => store.like);
  const [a] = useState(list.f);
  const { id } = list;
  const dispatch = useDispatch();
  const clickLike = () => {
    dispatch(addLike({ productId: id, quantity: id }));
  };
  console.log(like, a, "yes");
  return (
    <Container>
      <NavLink to={`/collection/${id}`}>
        <Imgs src={list?.bg} />
      </NavLink>
      <Data width={list?.w}>
        <Desc>
          <Subtitle main="true">
            {(value == "ENG" ? list.eng : value == "UZB" ? list.uzb : list.rus)||"Air Force"}
          </Subtitle>
          <Subtitle className="center">
            {value == "ENG" ? "Price: " : value == "UZB" ? "Narx: " : "Sena: "}
            <Subtitle main="true"> {list.s}</Subtitle>
          </Subtitle>
        </Desc>
        <Icon onClick={clickLike}>
          <Heart color="black" size="1.4rem" />
        </Icon>
      </Data>
    </Container>
  );
};

export default CollectionCard;
