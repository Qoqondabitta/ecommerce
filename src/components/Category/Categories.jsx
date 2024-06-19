import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Item, List } from "./style";
import Drop from "../dropdown/Drop";
import "./category.css"
import { burgerInfo } from "../../constants/navbars/burger";
import { IoClose } from "react-icons/io5";
import { toggleBurger } from "../../redux/burger";

const Categories = ({ classTitle }) => {
  const dispatch = useDispatch()
  const language = useSelector((store) => store.language);

    return (
    <Container className={`${classTitle} category`}>
      <List className="columnCenter">
        <IoClose className="pointer close" color="white" size="2em" onClick={()=>dispatch(toggleBurger())} />
        <Drop />
        {burgerInfo.map((v, i) => (
          <Item className="pointer" key={i}>
            {language.value == "ENG"
              ? v.title[0]
              : language.value == "UZB"
              ? v.title[1]
              : v.title[2]}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Categories;