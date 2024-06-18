import React from "react";
import { Boom, Container, Content, Main } from "./style";
import background from "../../assets/images/just/sneakers.webp";
import "./sneakers.css";
import { useSelector } from "react-redux";
import Button from "../generics/button/Button";
import Title from "../generics/title/Title";
import { PiSneakerThin } from "react-icons/pi";
import { Bunker } from "../generics";

const Sneakers = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Container img={background}>
        <Content>
          <Title type="sneakersTitle">
            {value == "ENG"
              ? "UP TO 40% + 15% OFF*"
              : value == "RUS"
              ? `#Тренируйтесь#Одевайтесь \n #Наслаждайтесь`
              : "#Shug'ulan#Kiy#Rohatlan Biz Bilan"}
          </Title>
          <Title type="videoText" color="black" fontWeight="600">
            {value == "ENG"
              ? "New Sneakers Collection for warm-weather trainings are available right now"
              : value == "RUS"
              ? `Доступна новая коллекция спортивных костюмов для тренировок в теплую погоду прямо сейчас`
              : "Issiq havoda mashg'ulotlar uchun yangi krasovkalar to'plami mavjud"}
          </Title>
          <Bunker type="sneakersBtn" className="center">
            <Button type="black">
              {value == "ENG" ? "Shop" : value == "RUS" ? "Купить" : "Olmoq"}
              <PiSneakerThin size="1.5em" />
            </Button>
            <Button type="black">
              {value == "ENG"
                ? "See Other Offers"
                : value == "RUS"
                ? "Купить"
                : "Olmoq"}
              <PiSneakerThin size="1.5em" />
            </Button>
          </Bunker>
        </Content>
      </Container>
    </Main>
  );
};

export default Sneakers;
