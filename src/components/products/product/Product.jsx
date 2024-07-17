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
import { Bunker } from "../../generics";

const Product = ( {list} ) => {
  const value = useSelector((store) => store.language.value);
  console.log(list);
  return (
    <>
      {list.map((v) => (
        <Container key={v?.id}>
          <Img src={v.bg} alt={v.eng} />
          <Details>
            <Headline>{v.e}</Headline>
            <Title>
              {v.eng},
              <Title>Size: {v.size == "n" ? "M" : v.size.toUpperCase()}, Color: {v.color }</Title>
            </Title>
            <Title cost="true">{v.s}</Title>
            <CardDetails>{v.description}</CardDetails>
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
