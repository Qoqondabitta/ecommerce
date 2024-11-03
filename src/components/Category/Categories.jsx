import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Item, List } from "./style";
import Drop from "../dropdown/Drop";
import "./category.css";
import { burgerInfo } from "../../constants/navbars/burger";
import { IoClose } from "react-icons/io5";
import { toggleBurger } from "../../redux/burger";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";
import { customOrder } from "../../redux/order";

const Categories = React.memo(({ classTitle }) => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);

  return (
    <Container className={`${classTitle} category`}>
      <List className="columnCenter">
        <IoClose
          className="pointer close"
          color="white"
          size="2em"
          onClick={() => dispatch(toggleBurger())}
        />
        <Drop />
        {burgerInfo.map((v, i) => (
          <NavLink key={i} to={v?.urltopage} style={{ textDecoration: "none" }}>
            <Item
              className="pointer"
              onClick={() => {
                dispatch(changeCollection(v?.l));
                dispatch(customOrder(v?.digit));
              }}
            >
              {language.value == "ENG"
                ? v.title[0]
                : language.value == "UZB"
                ? v.title[1]
                : v.title[2]}
            </Item>
          </NavLink>
        ))}
      </List>
    </Container>
  );
});

export default Categories;
