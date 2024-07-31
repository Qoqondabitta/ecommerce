import React from "react";
import { Container } from "./style";
import xonBackground from "../../assets/images/just/main.jpg";
import Title from "../generics/title";
import { Blur } from "../video/style";
import { Bunker } from "../generics";
import { genderkidssuits, genderperfume, gendersuits, genderwomen } from "../../constants/componentsContants/gender";
import { useDispatch, useSelector } from "react-redux";
import Button from "..//generics/button/Button";
// import { collectioncardsuits } from "../../constants/componentsContants/collection/collectionsuit";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";
import perfumemain from "../../assets/images/backgrounds/perfumemain.jpg";
import genderwomenmain from "../../assets/images/backgrounds/genderwomenmain.jpg"
import genderskidsmain from "../../assets/images/backgrounds/genderskidsmain.jpg";
import { cardfrank } from "../../constants/componentsContants/collection/collectionsport";

const Genders = () => {
  const order = useSelector((store) => store.order);
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.language);
  return (
    <Container
      className="alignEnd"
      position={order.value}
      backimage={
        order.value == 0
          ? genderwomenmain
          : order.value == 1
          ? xonBackground
          : order.value == 2
          ? genderskidsmain
          : perfumemain
      }
    >
      <Blur></Blur>
      {(order.value == 0
        ? genderwomen
        : order.value == 1
        ? gendersuits
        : order.value == 2
        ? genderkidssuits
        : genderperfume
      ).map((v, i) => (
        <Bunker type={v.bn.t} className={v.bn.cln}>
          <Title type={v.title.t}>
            {value == "ENG"
              ? v.title.ch[0]
              : value == "UZB"
              ? v.title.ch[1]
              : v.title.ch[2]}
          </Title>
          <NavLink
            to="/collection"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(changeCollection(cardfrank))}
          >
            <Button type={v.title.t}>
              {value == "ENG"
                ? v.btn[0]
                : value == "UZB"
                ? v.btn[1]
                : v.btn[2]}
            </Button>
          </NavLink>
        </Bunker>
      ))}
    </Container>
  );
};

export default Genders;
