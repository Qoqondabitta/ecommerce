import React, { useState } from "react";
import {
  Box,
  Button,
  Category,
  Collection,
  Container,
  Drop,
  Items,
  Main,
  Wrapper,
} from "./style";
import main from "../../../assets/images/backgrounds/mens-fashion-2024.webp";
import Nav from "../../navbars/secondNav/Nav";
import { Title } from "../../generics";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../../cards/collectionCard/CollectionCard";
import Footer from "../../footer/Footer";
import { category } from "../../../constants/componentsContants/collection/category/category";
import { changeCollection } from "../../../redux/collection";
import "./mencollection.css";
import {
  collectioncardconstants,
  menscollection,
} from "../../../constants/componentsContants/collection/collection";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import suitsmain from "../../../assets/images/collection/men/suitshalf3.jpg";
import shoesgif from "../../../assets/images/backgrounds/shoesgif.gif";
import { shoes } from "../../../constants/componentsContants/collection/shoes";
import sportgif from "../../../assets/images/backgrounds/sportgif.gif";
import { collectioncardsport } from "../../../constants/componentsContants/collection/collectionsport";
import { collectioncardsuits } from "../../../constants/componentsContants/collection/collectionsuit";
import { red } from "../../../constants/componentsContants/collection/colors/red";
import { blue } from "../../../constants/componentsContants/collection/colors/blue";
import { black } from "../../../constants/componentsContants/collection/colors/black";
import { orange } from "../../../constants/componentsContants/collection/colors/orange";

const Mens = () => {
  const [display, setDisplay] = useState("red")
  const [show, setShow] = useState(false);
  const [length, setLength] = useState("4288px");
  const dispatch = useDispatch();
  const collection = useSelector((store) => store.collection);
  const { value } = useSelector((store) => store.language);
  console.log(display, collection.value==black);
  const changeShow = () => {
    setShow(!show);
  };
  const changeLength = () => {
    if (length === "4288px") {
      setLength("fit-content");
    } else {
      setLength("4288px");
    }
  };
  const hackLength = () => {
    setLength("fit-content");
  };
  return (
    <Main>
      <Nav />
      <Container
        bg={
          collection.value == collectioncardconstants
            ? main
            : collection.value == shoes
            ? shoesgif
            : collection.value == collectioncardsport
            ? sportgif
            : collection.value == collectioncardsuits
            ? suitsmain
            : main
        }
        className="columnCenter"
      >
        {menscollection.map((v, i) => (
          <Title type={v.ty} color={v?.color}>
            {value == "ENG" ? v.c[0] : value == "UZB" ? v.c[1] : v.c[2]}
          </Title>
        ))}
      </Container>
      <Wrapper className="columnCenter">
        <Box length={length}>
          <Category className="justifyEnd" onClick={changeShow}>
            {value == "ENG"
              ? "Category"
              : value == "UZB"
              ? "Turlar"
              : "Категория"}
            {show ? (
              <IoIosArrowUp size="1.2rem" />
            ) : (
              <IoIosArrowDown size="1.2rem" />
            )}
          </Category>
          {show && (
            <Drop className="categorymenu">
              {show &&
                category.map((v, i) => (
                  <Items
                    className={`${
                      collection.value == v.l && "category-active-item"
                    } category-item`}
                    key={i}
                    onClick={() => {
                      dispatch(changeCollection(v.l));
                      setDisplay(v.c[0]);
                      changeShow();
                      v.c[0] == "red" ||
                      v.c[0] == "blue" ||
                      v.c[0] == "shoes" ||
                      v.c[0] == "black" ||
                      v.c[0] == "white" ||
                      v.c[0] == "orange" ||
                      v.c[0] == "women" ||
                      v.c[0] == "kids"
                        ? hackLength()
                        : null;
                    }}
                  >
                    {value == "ENG" ? v.c[0] : value == "UZB" ? v.c[1] : v.c[2]}
                  </Items>
                ))}
            </Drop>
          )}
          <Collection>
            <CollectionCard list={collection.value}></CollectionCard>
          </Collection>
        </Box>
        {(display == "suits" || display == "sport" || display == "men") ? (
          <Button onClick={changeLength}>
            {length == "4288px"
              ? value == "ENG"
                ? "See All"
                : value == "UZB"
                ? "Barchasini ko'rish"
                : "Посмотреть все"
              : value == "ENG"
              ? "See Less"
              : value == "UZB"
              ? "Kamroq ko'rish"
              : "Посмотреть все"}
          </Button>
        ) : (
          <Button
            onClick={() =>
              alert(
                "this is all what we can offer right now, come back later again."
              )
            }
          >
            {value == "ENG"
              ? "See All"
              : value == "UZB"
              ? "Barchasini ko'rish"
              : "Посмотреть все"}
          </Button>
        )}
      </Wrapper>
      <Footer />
    </Main>
  );
};

export default Mens;
