import React from "react";
import {
  BtnWrapper,
  Button,
  CardDetails,
  Container,
  Details,
  Headline,
  Img,
  Title,
} from "./style";
import { useSelector } from "react-redux";

const Product = ({ list }) => {
  const value = useSelector((store) => store.language.value);
  console.log(list);
  return (
    <>
      {list.map((v) => (
        <Container key={v?.id}>
          <Img
            src={v.bg}
            alt={value == "ENG" ? v?.f[0] : value == "UZB" ? v?.f[1] : v?.f[2]}
          />
          <Details>
            <Headline>
              {value == "ENG" ? v?.e[0] : value == "UZB" ? v?.e[1] : v?.e[2]}
            </Headline>
            <Title>
              {value == "ENG" ? v?.f[0] : value == "UZB" ? v?.f[1] : v?.f[2]}
              <Title>
                {value == "ENG"
                  ? "Size"
                  : value == "UZB"
                  ? "O'lcham"
                  : "Razmer"}
                : {v.size == "n" ? "M" : v.size},{" "}
                {value == "ENG" ? "Color" : value == "UZB" ? "Rang" : "Svet"}:{" "}
                {v.color}
              </Title>
            </Title>
            <Title cost="true">{v.s}</Title>
            <CardDetails>
              {value == "ENG"
                ? v?.description[0]
                : value == "UZB"
                ? v?.description[1]
                : v?.description[2]}
            </CardDetails>
            <BtnWrapper className="center">
              <Button add="true">
                {value == "ENG"
                  ? "Add To Cart"
                  : value == "UZB"
                  ? "Savatga Qo'shish"
                  : "Добавить в корзину"}
              </Button>
              <Button>
                {value == "ENG"
                  ? "Go To Cart"
                  : value == "UZB"
                  ? "Savatga Kirish"
                  : "Перейти в корзину"}
              </Button>
            </BtnWrapper>
          </Details>
        </Container>
      ))}
    </>
  );
};

export default Product;
