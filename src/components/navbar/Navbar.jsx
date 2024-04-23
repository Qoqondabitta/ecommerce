import React from "react";
import {
  Container,
  Parts,
  Search,
  Shop,
  Combine,
  Titles,
  Post,
  List,
  Item,
} from "./style";
import "./design.css";
import { useSelector } from "react-redux";
// import { increment, decrement } from "../../redux/Counter";
// import logo from "../../assets/images/logo.jpg";
import Drop from "../dropdown/Drop";
import Title from "../generics/title/Title";
import { FaLocationDot } from "react-icons/fa6";
// import { navbar } from "../../constants/navbar";

const Navbar = () => {
  const language = useSelector((store) => store.language);
  // const dispatch = useDispatch();
  console.log(language);
  return (
    <Container className="center">
      <div className="wrapper">
        <Parts>
          <Combine>
            <Post src={logo} />
            <Titles>
              <Title type="xon">XON</Title>
              <Title type="online">
                {language.value === "ENG"
                  ? "Online"
                  : language.value === "UZB"
                  ? "Online"
                  : language.value === "RUS"
                  ? "Онлайн"
                  : "search"}
              </Title>
              <Title type="store">
                {language.value === "ENG"
                  ? "Market"
                  : language.value === "UZB"
                  ? "Do'kon"
                  : language.value === "RUS"
                  ? "Магазин"
                  : "search"}
              </Title>
            </Titles>
          </Combine>
        </Parts>

        <Shop>
          <List>
            <Item>
              {language.value === "ENG"
                ? "Top Products"
                : language.value === "UZB"
                ? "Sara Mahsulotlar"
                : language.value === "RUS"
                ? "Топ Продукты"
                : "search"}
            </Item>
            <Item>
              {language.value === "ENG"
                ? "Discounts"
                : language.value === "UZB"
                ? "Chegirmalar"
                : language.value === "RUS"
                ? "Скидки"
                : "search"}
            </Item>
            <Item>
              {language.value === "ENG"
                ? "Branches"
                : language.value === "UZB"
                ? "Filiallar"
                : language.value === "RUS"
                ? "Магазины"
                : "search"}
            </Item>
          </List>
        </Shop>

        <Search>
          <Combine>
            <FaLocationDot className="media" color="white" size="1.3em" />
            <Title media="true" type="xon">
              {language.value === "ENG"
                ? "Tashkent, Uzbekistan"
                : language.value === "UZB"
                ? "Tashkent, Uzbekistan"
                : language.value === "RUS"
                ? "Ташкент, Узбекистан"
                : "search"}
            </Title>
          </Combine>
          <Drop />
        </Search>
      </div>
    </Container>
  );
};

export default Navbar;
