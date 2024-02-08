import React from "react";
import {
  Container,
  Parts,
  SearchContainer,
  Search,
  Round,
  Shop,
  Icon,
} from "./style";
import { CiSearch } from "react-icons/ci";
import "./design.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
// import { increment, decrement } from "../../redux/Counter";
import Input from "../generics/input/Input";
import Title from "../generics/title/Title";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { Button } from "../generics/button/style";
import { useState } from "react";
import Categories from "../Category/Categories";
// import

const PostNavbar = () => {
  const [show, setShow] = useState(false)
  const counter = useSelector((store) => store.counter);
  const language = useSelector((store) => store.language);
  // const dispatch = useDispatch();
  console.log(language);

  const category = () => {
    setShow(!show)
  }

  return (
    <Container className="center">
      <div className="wrapper">
        <Parts style={{ position: "relative" }}>
          <Button onClick={category} type="category" className="center">
            <BiSolidCategory color="white" size="1.3em" />
            {language.value === "ENG"
              ? "Category"
              : language.value === "UZB"
              ? "Kategoriya"
              : language.value === "RUS"
              ? "Категория"
              : "search"}
          </Button>
          {show && <Categories position="absolute" />}
        </Parts>{" "}
        <Search>
          <SearchContainer>
            <Input
              type="search"
              placeholder={
                language.value === "ENG"
                  ? "Search"
                  : language.value === "UZB"
                  ? "Qidirish"
                  : language.value === "RUS"
                  ? "Поиск"
                  : "search"
              }
            />
            <CiSearch color="white" />
          </SearchContainer>
        </Search>
        <Shop>
          <Icon className="center">
            <BsFillSuitHeartFill color="red" size="1.3em" />
          </Icon>
          <Icon className="center">
            <PiShoppingCartLight color="white" size="1.6em" />
            <Round className="center">{counter.data}</Round>
          </Icon>
        </Shop>
      </div>
    </Container>
  );
};

export default PostNavbar;
