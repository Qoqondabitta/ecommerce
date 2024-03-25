import React from "react";
import { useSelector } from "react-redux";
import {
  EngAccCategory,
  EngBotCategory,
  EngTopCategory,
  RusAccCategory,
  RusBotCategory,
  RusTopCategory,
  UzbAccCategory,
  UzbBotCategory,
  UzbTopCategory,
} from "../../constants/category";
import { Container, Item, List, Types } from "./style";

const Categories = ({ position }) => {
  const language = useSelector((store) => store.language);
  return (
    <Container position={position}>
      <List>
        <Types>
          {language.value == "UZB"
            ? "Tepa"
            : language.value == "RUS"
            ? "Bepx"
            : "Top"}
        </Types>
        {(language.value == "UZB"
          ? UzbTopCategory
          : language.value == "RUS"
          ? RusTopCategory
          : EngTopCategory
        ).map((v) => (
          <Item>{v}</Item>
        ))}
      </List>
      <List>
        <Types>
          {language.value == "UZB"
            ? "Pas"
            : language.value == "RUS"
            ? "Hижний"
            : "Bottom"}
        </Types>
        {(language.value == "RUS"
          ? RusBotCategory
          : language.value == "UZB"
          ? UzbBotCategory
          : EngBotCategory
        ).map((v) => (
          <Item>{v}</Item>
        ))}
      </List>
      <List>
        <Types>
          {language.value == "UZB"
            ? "Aksesuarlar"
            : language.value == "RUS"
            ? "Aксессуары"
            : "Accessories"}
        </Types>
        {(language.value === "RUS"
          ? RusAccCategory
          : language.value == "UZB"
          ? UzbAccCategory
          : EngAccCategory
        ).map((v) => (
          <Item>{v}</Item>
        ))}
      </List>
    </Container>
  );
};

export default Categories;
