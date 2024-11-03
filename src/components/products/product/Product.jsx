import React, { useState } from "react";
import {
  BtnWrapper,
  Button,
  CardDetails,
  Container,
  Details,
  Headline,
  Img,
  ImgWrapper,
  Title,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../redux/cart";
import { changeProperty } from "../../../redux/properties";

const Product = React.memo(({ list }) => {
  const [show, setShow] = useState(false);
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  const value = useSelector((store) => store.language.value);
  const SaveProduct = () => {
    console.log(list, "for cart");
    dispatch(addToCart(...list));
    setShow(true);
  };
  const chnageShow = () => {
    setShow(!show);
  };
  return (
    <>
      {list.map((v) => (
        <Container key={v?.id}>
          <ImgWrapper className="center">
            <Img
              src={v.bg}
              small={v?.small}
              loading="lazy"
              alt="XON Online Store"
            />
          </ImgWrapper>
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
                : {v?.size == "n" ? "M" : v?.size},{" "}
                {value == "ENG" ? "Color" : value == "UZB" ? "Rang" : "Цвет"}:{" "}
                {value == "ENG"
                  ? v?.color
                  : value == "UZB"
                  ? `${
                      v?.color == "white"
                        ? "oq"
                        : v?.color == "red"
                        ? "qizil"
                        : v?.color == "blue"
                        ? "ko'k"
                        : v?.color == "green"
                        ? "yashil"
                        : v?.color == "black"
                        ? "qora"
                        : v?.color == "grey"
                        ? "kulrang"
                        : v?.color == "orange"
                        ? "olovrang"
                        : "sariq"
                    }`
                  : `${
                      v?.color == "white"
                        ? "белый"
                        : v?.color == "red"
                        ? "красный"
                        : v?.color == "blue"
                        ? "синий"
                        : v?.color == "green"
                        ? "зеленый"
                        : v?.color == "black"
                        ? "черный"
                        : v?.color == "grey"
                        ? "серый"
                        : v?.color == "orange"
                        ? "оранжевый"
                        : "желтый"
                    }`}
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
              <Button add="true" onClick={SaveProduct}>
                {show
                  ? `${
                      value == "ENG"
                        ? "Added To Cart"
                        : value == "UZB"
                        ? "Savatga Qo'shildi"
                        : "Добавлeнo в корзину"
                    }`
                  : `${
                      value == "ENG"
                        ? "Add To Cart"
                        : value == "UZB"
                        ? "Savatga Qo'shish"
                        : "Добавить в корзину"
                    }`}
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/account">
                <Button onClick={() => dispatch(changeProperty("cart"))}>
                  {value == "ENG"
                    ? "Go To Cart"
                    : value == "UZB"
                    ? "Savatga Kirish"
                    : "Перейти в корзину"}
                </Button>
              </NavLink>
            </BtnWrapper>
          </Details>
          {/* {show && <Metric mail={list} photo={v.bg}></Metric>} */}
        </Container>
      ))}
    </>
  );
});

export default Product;
