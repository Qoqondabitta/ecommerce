import React from "react";
import { Button, Container, Content, Main, Motiv, Text, Title, Blur } from "./style";
import background from "../../assets/images/topCard/new.jpg";
import { FaCrown } from "react-icons/fa";
import "./soon.css";
import { useSelector } from "react-redux";

const Soon = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Blur></Blur>
      <Container img={background}>
        <Content className="">
          <Motiv>
            <Title className="end">
              <FaCrown className="crown" />
              <i>{value == "RUS" ? "ХОН" : "XON"}</i>
            </Title>
            {value == "ENG"
              ? "#Train#Wear#Enjoy With Us"
              : value == "RUS"
              ? `#Тренируйтесь#Одевайтесь \n #Наслаждайтесь`
              : "#Shug'ulan#Kiy#Rohatlan Biz Bilan"}
          </Motiv>
          <Text>
            {value == "ENG"
              ? "New Tracksuit Collection for warm-weather trainings are available right now"
              : value == "RUS"
              ? `Доступна новая коллекция спортивных костюмов для тренировок в теплую погоду прямо сейчас`
              : "Issiq havoda mashg'ulotlar uchun yangi sport kostyumlari to'plami mavjud hoziroq"}
          </Text>
          <Button>
            {value == "ENG" ? "Shop" : value == "RUS" ? "Купить" : "Olmoq"}
          </Button>
        </Content>
      </Container>
    </Main>
  );
};

export default Soon;
