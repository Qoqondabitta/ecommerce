import React from "react";
import {
  Container,
  // Input,
  Language,
  Parts,
  SearchContainer,
  Search,
  Logo,
  Round,
  Shop,
} from "./style";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.jpg";
import "./design.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../../redux/Counter";
import Input from "../generics/input/Input";
// import "../../style.css"

const Navbar = () => {
  const counter = useSelector((store) => store.counter);
  // const dispatch = useDispatch();

  return (
    <Container className="center">
      <div className="wrapper">
        <Search>
          <Language>En</Language>
          <SearchContainer>
            <Input type="search" placeholder="Search" />
            <CiSearch />
          </SearchContainer>
        </Search>
        <Parts>
          <Logo src={logo} />
        </Parts>
        <Shop style={{ position: "relative" }}>
          <PiShoppingCartLight size="1.8em" />
          <Round className="center">{counter.data}</Round>
        </Shop>
      </div>
    </Container>
  );
};

export default Navbar;
