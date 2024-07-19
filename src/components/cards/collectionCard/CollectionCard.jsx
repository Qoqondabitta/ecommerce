import React, { useState } from "react";
import { Container, Data, Desc, Icon, Imgs, Subtitle } from "./style";
import { GoHeart as Heart } from "react-icons/go";
import cardimg from "../../../assets/images/collection/men/collectioncard10.jpeg";
import cardimg2 from "../../../assets/images/collection/men/collectioncard10alternative.webp";
import { useDispatch, useSelector } from "react-redux";
import { collectioncardconstants } from "../../../constants/componentsContants/collection/collection";
import { NavLink } from "react-router-dom";
import { addLike } from "../../../redux/like";
import { BsFillSuitHeartFill as RedHeart } from "react-icons/bs";

const CollectionCard = ({ list }) => {
  const [that, setThat] = useState(true);
  const { value } = useSelector((store) => store.language);
  const like = useSelector((store) => store.like);
  const dispatch = useDispatch();

  const clickLike = (digit) => {
    let a = list.filter((v) => v.id == digit);
    dispatch(addLike(a));
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
            <Icon
              className="cursor"
              onClick={() => {
                clickLike(v?.id);
              }}
            >
              <Heart color="black" size="1.4rem" />
            </Icon>
          </Data>
        </Container>
      ))}
    </>
  );
};

export default CollectionCard;
