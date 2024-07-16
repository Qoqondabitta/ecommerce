import React from "react";
import { Container, Data, Icon, Subtitle } from "./style";
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
  const { id, f, t } = list;
  const dispatch = useDispatch();
  const clickLike = () => {
    dispatch(addLike({ productId: id, quantity: id }));
  };
  console.log(like);
  return (
    <>
      {/* {list.map((v, i) => ( */}
      {/* // <NavLink to={`/collection/${v?.id}`}> */}
      <Container
        bgimg={list?.bg}
        position={list?.position}
        place={list?.place}
        alternatiliste={list?.a || list?.bg}
        width={list?.w}
      >
        <Icon onClick={clickLike}>
          <Heart color="black" size="1.4rem" />
        </Icon>
        {list?.su && (
          <Subtitle style={{ color: "white" }} underline="true">
            {value == "ENG"
              ? list?.su[0]
              : value == "UZB"
              ? list?.su[1]
              : list?.su[2]}
          </Subtitle>
        )}
        <Data width={list?.w}>
          {list?.f && (
            <Subtitle>
              {value == "ENG"
                ? list?.f[0]
                : value == "UZB"
                ? list?.f[1]
                : list?.f[2]}
            </Subtitle>
          )}
          {list?.s && <Subtitle style={{ marginTop: "20px" }}>10$</Subtitle>}
          {list?.t && (
            <Subtitle underline="true">
              {value == "ENG"
                ? list?.t[0]
                : value == "UZB"
                ? list?.t[1]
                : list?.t[2]}
            </Subtitle>
          )}
        </Data>
      </Container>
      {/* // </NavLink> */}
      {/* // ))} */}
    </>
  );
};

export default CollectionCard;
