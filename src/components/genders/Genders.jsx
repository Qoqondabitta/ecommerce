import React from "react";
import { Container } from "./style";
import xonBackground from "../../assets/images/just/main.jpg";
import Button from "../generics/button/Button";
import Title from "../generics/title/Title";
import { Blur } from "../video/style";
import { Bunker } from "../generics";
import { gendersuits } from "../../constants/componentsContants/gender";
import { useSelector } from "react-redux";

const Genders = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Container className="alignEnd" backimage={xonBackground}>
      <Blur></Blur>
      {gendersuits.map((v, i) => (
        <Bunker type="grey" key={i} className="columnCenter">
          <Title type={v.title.t}>
            {value == "ENG"
              ? v.title.ch[0]
              : value == "UZB"
              ? v.title.ch[1]
              : v.title.ch[2]}
          </Title>
          <Button type={v.title.t}>
            {value == "ENG" ? v.btn[0] : value == "UZB" ? v.btn[1] : v.btn[2]}
          </Button>
        </Bunker>
      ))}
    </Container>
  );
};

export default Genders;