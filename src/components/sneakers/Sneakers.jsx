import React from "react";
import { Container, Content, Main, Blur } from "./style";
import background from "../../assets/images/just/sneakers.webp";
import { FaCrown } from "react-icons/fa";
import "./sneakers.css";
import { useSelector } from "react-redux";
import Button from "../generics/button/Button";
import Title from "../generics/title/Title";
import { PiSneakerThin } from "react-icons/pi";
import { Item } from "../tabs/style";

const Sneakers = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      {/* <Blur></Blur> */}
      <Container img={background}>
        <Content className="">
          {/* <Title className="end videoTitles" type="videoTitle">
            <FaCrown className="crown" />
            {value == "RUS" ? "ХОН" : "XON"}
          </Title> */}
          <Title type="sneakersTitle">
            {value == "ENG"
              ? "UP TO 40% + 15% OFF*"
              : value == "RUS"
              ? `#Тренируйтесь#Одевайтесь \n #Наслаждайтесь`
              : "#Shug'ulan#Kiy#Rohatlan Biz Bilan"}
          </Title>
          <Title type="videoText" color="black">
            {value == "ENG"
              ? "New Sneakers Collection for warm-weather trainings are available right now"
              : value == "RUS"
              ? `Доступна новая коллекция спортивных костюмов для тренировок в теплую погоду прямо сейчас`
              : "Issiq havoda mashg'ulotlar uchun yangi krasovkalar to'plami mavjud"}
          </Title>
          <Item type="browse">
            {value == "ENG" ? "Shop" : value == "RUS" ? "Купить" : "Olmoq"}
            <PiSneakerThin size="1.5em" />
          </Item>
        </Content>
      </Container>
    </Main>
  );
};

export default Sneakers;
