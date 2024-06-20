import React, { useState } from "react";
import { Container, Item, Link, List, Main } from "./style";
import { Icon, Round, Shop } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Drop from "../../dropdown/Drop";
import { links } from "../../../constants/navbars/navbar";
import "./secondNav.css";
import Title from "../../generics/title/Title";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { toggleBurger } from "../../../redux/burger";
import Categories from "../../Category/Categories";

const Nav = () => {
  const dispatch = useDispatch()
  const language = useSelector((store) => store.language);
  const counter = useSelector((store) => store.counter);
  const order = useSelector((store) => store.order);
  const burger = useSelector((store)=>store.burger)
console.log(burger);
  return (
    <Main className="columnCenter">
      <Container>
        <Title type="xonTitle">{language.value == "RUS" ? "ХОН" : "XON"}</Title>
        <List className="">
          {links.map((v, i) => (
            <Item key={i}>
              <Link className={i == order.value && "activeNavbarLink"}>
                {language.value == "ENG"
                  ? v.title[0]
                  : language.value == "UZB"
                  ? v.title[1]
                  : v.title[2]}
              </Link>
            </Item>
          ))}
        </List>
        <Shop>
          {/* <Drop /> */}
          {/* <Icon className=""> */}
          <FaRegHeart color="white" size="1.5em" className="navIcons" />
          {/* </Icon> */}
          {/* <Icon className=""> */}
          <LuUser color="white" size="1.7em" className="navIcons" />
          {/* </Icon> */}
          <Icon className="">
            <IoCartOutline className="navIcons" color="white" size="1.8em" />
            <Round className="center">{counter.data}</Round>
          </Icon>
          {/* <Icon className="" onClick={() => dispatch(toggleBurger())}> */}
          <HiOutlineMenu
            className="navIcons"
            color="white"
            size="1.8em"
            onClick={() => dispatch(toggleBurger())}
          />
          {/* </Icon> */}
        </Shop>
      </Container>
      <Categories classTitle={burger.value == true && "open"} />
    </Main>
  );
};

export default Nav;
