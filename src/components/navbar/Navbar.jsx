import React from "react";
import {
  Container,
  Parts,
  SearchContainer,
  Search,
  Round,
  Shop,
  Combine,
  Title,
  Top,
  Center,
  Bottom,
  Post,
} from "./style";
import { CiSearch } from "react-icons/ci";
import "./design.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
// import { increment, decrement } from "../../redux/Counter";
import Input from "../generics/input/Input";
import logo from "../../assets/images/logo.jpg";
import Drop from "../dropdown/Drop";

const Navbar = () => {
  const counter = useSelector((store) => store.counter);
  const language = useSelector((store) => store.language);
  // const dispatch = useDispatch();
console.log( language);
  return (
    <Container className="center">
      <div className="wrapper">
        <Search>
          <Drop />
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
            <CiSearch />
          </SearchContainer>
        </Search>
        <Parts>
          {" "}
          <Combine>
            <Post src={logo} />
            <Title>
              <Top>XON</Top>
              <Center>
                {language.value === "ENG"
                  ? "Online"
                  : language.value === "UZB"
                  ? "Online"
                  : language.value === "RUS"
                  ? "Онлайн"
                  : "search"}
              </Center>
              <Bottom>
                {language.value === "ENG"
                  ? "Market"
                  : language.value === "UZB"
                  ? "Do'kon"
                  : language.value === "RUS"
                  ? "Магазин"
                  : "search"}
              </Bottom>
            </Title>
          </Combine>
        </Parts>
        <Shop>
          <PiShoppingCartLight size="1.8em" />
          <Round className="center">{counter.data}</Round>
        </Shop>
      </div>
    </Container>
  );
};

export default Navbar;
