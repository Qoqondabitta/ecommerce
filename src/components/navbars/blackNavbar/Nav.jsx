import React from "react";
import { Container, Item, Link, List, Main, MediaLook } from "./style";
import { Icon, Round, Shop } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { links } from "../../../constants/navbars/navbar";
import "./secondNav.css";
import Title from "../../generics/title";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { toggleBurger } from "../../../redux/burger";
import Categories from "../../Category/Categories";
import { CiSearch } from "react-icons/ci";
import { Input } from "../../generics";
import { IoSearch } from "react-icons/io5";
import Search from "../../mini/search/Search";
import { toggleSearch } from "../../../redux/search";
import { changePage } from "../../../redux/page";
import { NavLink } from "react-router-dom";
import { changeProperty } from "../../../redux/properties";

const BlackNav = () => {
  const search = useSelector((store) => store.search);
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);
  const counter = useSelector((store) => store.counter);
  const order = useSelector((store) => store.order);
  const burger = useSelector((store) => store.burger);
  return (
    <Main className="columnCenter">
      <Container>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <Title color="black" id="mainTitle" type="xonTitle">
            {language.value == "RUS" ? "ХОН" : "XON"}
          </Title>
        </NavLink>
        <List className="">
          {links.map((v, i) => (
            <Item
              className="cursor"
              onClick={() => {
                dispatch(changePage(v.title[0]));
                dispatch(customOrder(i));
              }}
              key={i}
            >
              <Link className={i == order.value && "BlackactiveNavbarLink"}>
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
            color="black"
            size="1.6em"
            className="navIcons"
          />
          <NavLink to="/account">
            <FaRegHeart color="black" size="1.5em" className="navIcons" />
          </NavLink>
          <NavLink to="/signin" exact>
            <LuUser color="black" size="1.7em" className="navIcons" />
          </NavLink>
          <Icon className="">
            <NavLink to="/account">
              <IoCartOutline
                onClick={() => dispatch(changeProperty("cart"))}
                className="navIcons"
                color="black"
                size="1.8em"
              />
              <Round className="center">{cart.length}</Round>
            </NavLink>
          </Icon>
          <HiOutlineMenu
            className="navIcons"
            color="black"
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

export default BlackNav;
