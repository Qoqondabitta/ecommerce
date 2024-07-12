import React from "react";
import { Container } from "./style";
import xonBackground from "../../assets/images/just/main.jpg";
import Title from "../generics/title";
import { Blur } from "../video/style";
import { Bunker } from "../generics";
import { gendersuits } from "../../constants/componentsContants/gender";
import { useDispatch, useSelector } from "react-redux";
import Button from "..//generics/button/Button";
import { collectioncardsuits } from "../../constants/componentsContants/collection/collectionsuit";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";

const Genders = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((store) => store.language);
  return (
    <Container className="alignEnd" backimage={xonBackground}>
      <Blur></Blur>
      <Bunker type="grey" className="columnCenter">
        <Title type="gucci">
          {value == "ENG"
            ? gendersuits[0].title.ch[0]
            : value == "UZB"
            ? gendersuits[0].title.ch[1]
            : gendersuits[0].title.ch[2]}
        </Title>
        <NavLink
          to="/collection"
          style={{ textDecoration: "none" }}
          onClick={() => dispatch(changeCollection(collectioncardsuits))}
        >
          <Button type="gucci">
            {value == "ENG"
              ? gendersuits[0].btn[0]
              : value == "UZB"
              ? gendersuits[0].btn[1]
              : gendersuits[0].btn[2]}
          </Button>
        </NavLink>
      </Bunker>
    </Container>
  );
};

export default Genders;
