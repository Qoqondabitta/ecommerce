import React, { useState } from "react";
import {
  Box,
  Button,
  Category,
  CategoryWrapper,
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
import { cardfrank, collectioncardsport } from "../../../constants/componentsContants/collection/collectionsport";
// import { collectioncardsuits } from "../../../constants/componentsContants/collection/collectionsuit";
import { FindTool, Input, InputWrappers, Label, SearchButton } from "./filter";
import { Alarm } from "./alarm";
import { IoClose } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import FootNav from "../../footNav/FootNav"

const Mens = () => {
  const collection = useSelector((store) => store.collection);
  const { value } = useSelector((store) => store.language);
  const [color, setColor] = useState("");
  const [here, setHere] = useState(false);
  const [display, setDisplay] = useState("red");
  const [show, setShow] = useState(false);
  const [length, setLength] = useState("fit-content");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()
  const [warn, setWarn] = useState(false);
  const changeHere = () => {
    if (show) {
      setShow(false);
    }
    setHere(!here);
  };
  const changeShow = () => {
    if (here) {
      setHere(false);
    }
    setShow(!show);
  };
  const changeWarn = () => {
    setWarn(!warn);
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
  const changeColor = (e) => {
    let result = e.target.value.toLowerCase();
    setColor(result);
  };
  const changeKeyword = (e) => {
    let res = "";
    if (e.target.value.toLowerCase() == "m") {
      setKeyword("n");
    } else {
      res = e.target.value.toLowerCase();
      setKeyword(res);
    }
  };
  const checkSize = () => {
    if (color == "") {
      let res = collection.value.filter((v) => {
        return v.size == keyword;
      });
      console.log(res, "res array");
      setList(res);
    } else if (keyword == "") {
      let res = collection.value.filter((v) => {
        return v.color == color;
      });
      setList(res);
    } else if (keyword != "" && color != "") {
      let res = collection.value.filter((v) => {
        return v.color == color && v.size == keyword;
      });
      setList(res);
    } else {
      setHere(!here);
    }
    setHere(!here);
    setKeyword("");
    setColor("");
  };

  const closeDrops = (e) => {
    if (here) {
      setHere(false);
    } else if (show) {
      setShow(false);
    }
  };

  return (
    <Main>
      {warn && (
        <Alarm onClick={changeWarn}>
          <IoClose className="warning-closer" size="1.5rem" color="red" />
          Check the size: (s | m |l | xl | xxl) and color: ( blue / orange /
          black / white / red). Or unfortunately right now we do not have what
          you are looking for, so please check back later or search for other
          options. Thanks! Click to close this tab.
        </Alarm>
      )}
      <Nav />
      <Container
        bg={
          collection.value == collectioncardconstants
            ? main
            : collection.value == shoes
            ? shoesgif
            : collection.value == collectioncardsport
            ? sportgif
            : collection.value == cardfrank
            ? suitsmain
            : main
        }
        className="columnCenter"
      >
        {menscollection.map((v, i) => (
          <Title type={v.ty} key={i} color={v?.color}>
            {value == "ENG" ? v.c[0] : value == "UZB" ? v.c[1] : v.c[2]}
          </Title>
        ))}
      </Container>
      <Wrapper className="columnCenter">
        <Box length={length}>
          <CategoryWrapper>
            <Category className="center" onClick={changeHere}>
              {value == "ENG"
                ? "Filter"
                : value == "UZB"
                ? "Yordamlar"
                : "Фильтр"}
              {here ? (
                <IoIosArrowUp size="1.2rem" />
              ) : (
                <IoIosArrowDown size="1.2rem" />
              )}
            </Category>
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
          </CategoryWrapper>
          {here && (
            <FindTool className="findTool columnCenter">
              <InputWrappers>
                <Label>Size any: s/m/48/36</Label>
                <Input onChange={changeKeyword} />
              </InputWrappers>
              <InputWrappers>
                <Label>Color any: blue/black</Label>
                <Input onChange={changeColor} />
              </InputWrappers>
              <SearchButton onClick={checkSize}>Search</SearchButton>
            </FindTool>
          )}
          {show && (
            <Drop className="dropTool categorymenu">
              {show &&
                category.map((v, i) => (
                  <Items
                    className={`${
                      collection.value == v.l && "category-active-item"
                    } category-item`}
                    key={i}
                    onClick={() => {
                      // v.c[0]=="suits"&&navigate("/suit")
                      dispatch(changeCollection(v.l));
                      setDisplay(v.c[0]);
                      setList([]);
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
          {list.length == 0 && (
            <Collection>
              {collection.value.map((v, i) => (
                <CollectionCard key={i} list={v}></CollectionCard>
              ))}
            </Collection>
          )}
          {list.length > 0 && (
            <Collection>
              {list.map((v, i) => (
                <CollectionCard key={i} list={v}></CollectionCard>
              ))}
            </Collection>
          )}
        </Box>
        {display == "suits" || display == "sport" || display == "men" ? (
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
      <FootNav />
      <Footer />
    </Main>
  );
};

export default Mens;
