import React, { useState } from "react";
import { Container, Item, Link, List, Main, MediaLook } from "./style";
import { Icon, Round, Shop } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { links } from "../../../constants/navbars/navbar";
import "./secondNav.css";
import Title from "../../generics/title/Title";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { toggleBurger } from "../../../redux/burger";
import Categories from "../../Category/Categories";
import { CiSearch } from "react-icons/ci";
import { Bunker } from "../../generics";
import { Input } from "../../generics";
import { IoSearch } from "react-icons/io5";
import Search from "../../mini/search/Search";
import { toggleSearch } from "../../../redux/search";

const Nav = () => {
  const search = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);
  const counter = useSelector((store) => store.counter);
  const order = useSelector((store) => store.order);
  const burger = useSelector((store) => store.burger);
  console.log(search);
  return (
    <Main className="columnCenter">
      <Container>
        <Title id="mainTitle" type="xonTitle">
          {language.value == "RUS" ? "ХОН" : "XON"}
        </Title>
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
          <IoSearch
            onClick={() => dispatch(toggleSearch())}
            color="white"
            size="1.6em"
            className="navIcons"
          />
          <FaRegHeart color="white" size="1.5em" className="navIcons" />
          <LuUser color="white" size="1.7em" className="navIcons" />
          <Icon className="">
            <IoCartOutline className="navIcons" color="white" size="1.8em" />
            <Round className="center">{counter.data}</Round>
          </Icon>
          <HiOutlineMenu
            className="navIcons"
            color="white"
            size="1.8em"
            onClick={() => dispatch(toggleBurger())}
          />
        </Shop>
        <MediaLook onClick={() => dispatch(toggleSearch())}>
          <Input type="search" placeholder="Search Anything" />
          <CiSearch color="black" />
        </MediaLook>
      </Container>
      {search.value && <Search />}
      <Categories classTitle={burger.value == true && "open"} />
    </Main>
  );
};

export default Nav;
