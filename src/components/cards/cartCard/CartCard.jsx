import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Left,
  PriceTag,
  Productimage,
  Right,
  Size,
  Texts,
  Title,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../../redux/cart";
import PaymentForm from "../../pay/Payment";

const CartCard = ({ info }) => {
  const [quantity, setQuantity] = useState(1);
  const [list, setList] = useState(info);
  const [newSize, setNewSize] = useState(info.size);
  const [newColor, setNewColor] = useState(info.color);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const numberValue = parseInt(list.s.replace("$", ""));
  const l = useSelector((store) => store.language.value);
  const changeEdit = () => {
    setEdit(!edit);
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  const changeNewSize = (e) => {
    setNewSize(e.target.value);
  };
  const changeNewColor = (e) => {
    setNewColor(e.target.value);
  };
  const changeQuantity = (sort) => {
    sort == "plus"
      ? setQuantity(quantity + 1)
      : quantity > 0 && setQuantity(quantity - 1);
  };
  const removeItemFromCart = () => {
    dispatch(deleteFromCart(info));
  };
  const editColor = () => {
    setList({ ...list, color: newColor });
  };
  const editSize = () => {
    setList({ ...list, size: newSize });
  };
  return (
    <Container className="center">
      <Left>
        <Productimage src={info.bg} />
        <Button onClick={() => setShow(!show)} buy="true">
          {l == "ENG" ? "Buy" : l == "UZB" ? "Olmoq" : "Купить"}
        </Button>
      </Left>
      <Right>
        <Title>
          {l == "ENG" ? info.f[0] : l == "UZB" ? info.f[1] : info.f[2]}
        </Title>
        {list?.color ? (
          <Size>
            <Texts width="true">
              {l == "ENG" ? "Color" : l == "UZB" ? "Rang" : "Цвет"}:{" "}
              {l == "ENG"
                ? list?.color
                : l == "UZB"
                ? `${
                    list?.color == "white"
                      ? "oq"
                      : list?.color == "red"
                      ? "qizil"
                      : list?.color == "blue"
                      ? "ko'k"
                      : list?.color == "green"
                      ? "yashil"
                      : list?.color == "black"
                      ? "qora"
                      : list?.color == "grey"
                      ? "kulrang"
                      : list?.color == "orange"
                      ? "olovrang"
                      : "sariq"
                  }`
                : `${
                    list?.color == "white"
                      ? "белый"
                      : list?.color == "red"
                      ? "красный"
                      : list?.color == "blue"
                      ? "синий"
                      : list?.color == "green"
                      ? "зеленый"
                      : list?.color == "black"
                      ? "черный"
                      : list?.color == "grey"
                      ? "серый"
                      : list?.color == "orange"
                      ? "оранжевый"
                      : "желтый"
                  }`}
            </Texts>
            {theme && (
              <Input
                name="color"
                onChange={changeNewColor}
                placeholder={
                  l == "ENG"
                    ? "type color"
                    : l == "UZB"
                    ? "rangni kiriting"
                    : "выбрать цвет"
                }
              />
            )}
            <Button
              onClick={() => {
                changeTheme();
                editColor();
              }}
              className="center"
              edit="true"
            >
              {theme
                ? `${
                    l == "ENG" ? "Choose" : l == "UZB" ? "Tanlamoq" : "Bыбрать"
                  }`
                : `${l == "ENG" ? "Edit" : l == "UZB" ? "Boshqa" : "Изменять"}`}
            </Button>
          </Size>
        ) : (
          <Size width="true">
            <Texts width="true">
              {l == "ENG" ? "Scent" : l == "UZB" ? "Hidi" : "Запах"}: {""}
              {l == "ENG"
                ? list?.scent[0]
                : l == "UZB"
                ? list?.scent[1]
                : list?.scent[2]}
            </Texts>
          </Size>
        )}
        <Size>
          <Texts width="true">
            {l == "ENG" ? "Size" : l == "UZB" ? "O'lcham" : "Pазмер"}:{" "}
            {list?.size == "n" ? "M" : list?.size}
          </Texts>
          {edit && (
            <Input
              name="size"
              onChange={changeNewSize}
              placeholder={
                l == "ENG"
                  ? "type size"
                  : l == "UZB"
                  ? "o'lchamni kiriting"
                  : "Bыбрать Pазмер"
              }
            />
          )}
          <Button
            className="center"
            onClick={() => {
              changeEdit();
              editSize();
            }}
            edit="true"
          >
            {edit
              ? `${l == "ENG" ? "Choose" : l == "UZB" ? "Tanlamoq" : "Bыбрать"}`
              : `${l == "ENG" ? "Edit" : l == "UZB" ? "Boshqa" : "Изменять"}`}
          </Button>
        </Size>
        <PriceTag>
          <Size>
            <Button onClick={() => changeQuantity("minus")} className="center">
              -
            </Button>
            <Texts>{quantity}</Texts>
            <Button onClick={() => changeQuantity("plus")} className="center">
              +
            </Button>
          </Size>{" "}
          <Texts width="true">
            {l == "ENG" ? "Price" : l == "UZB" ? "Narx" : "Цена"}:{" "}
            {numberValue * quantity}$
          </Texts>
        </PriceTag>
        <Button buy="true" onClick={removeItemFromCart}>
          {l == "ENG"
            ? "Remove From Cart"
            : l == "UZB"
            ? "Savatdan O'chirish"
            : "Удалить продукт"}
        </Button>
      </Right>
      {show && <PaymentForm goods={info} />}
    </Container>
  );
};

export default CartCard;
