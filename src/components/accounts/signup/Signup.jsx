import React, { useState } from "react";
import {
  AlertBox,
  Button,
  Container,
  Form,
  Inputs,
  InputWrappers,
  Subtitles,
  Title,
} from "./style";
import { useSelector } from "react-redux";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Singup = () => {
  const l = useSelector((store) => store.language.value);
  const [path, setPath] = useState("");
  const [show, setShow] = useState(false);
  const { value } = useSelector((stroe) => stroe.language);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const changeRepeat = (e) => {
    const { name, value } = e.target;
    name == "email"
      ? setInputValue(value)
      : name == "password"
      ? setPassword(value)
      : setRepeat(value);
    setShow(false);
  };
  const checkUser = () => {
    localStorage.setItem("fullname", repeat);
    localStorage.setItem("email", inputValue);
    localStorage.setItem("password", password);
      repeat && password && inputValue
        ? setPath("/signin")
        : alert(
            l == "ENG"
              ? "Fill Out Every Gap or Make Sure That There Is No Mistake."
              : l == "UZB"
              ? "Hamma Blankalarni To'ldiring yoki Hato Yo'qligini Tekshiring"
              : "Заполните каждый пробел или убедитесь, что нет ошибки."
          );
  };
  console.log("12347890456".length);
  return (
    <Container>
      <Form>
        <Title>
          {l == "ENG" ? "Join" : l == "UZB" ? "Qo'shiling" : "Присоединись"}
          <Title style={{ display: "flex", gap: "10px" }}>
            <Title>{l == "RUS" ? "XOH" : "XON"}</Title>{" "}
            {l == "ENG" ? "Community" : l == "UZB" ? "Jamoasiga" : "Командe"}
          </Title>
        </Title>

        <InputWrappers className="up-group">
          <Inputs name="fullname" type="text" onChange={changeRepeat} />
          <p>
            {value == "ENG"
              ? "Full Name and Surname*"
              : value == "UZB"
              ? "To'liq Ism va Familiya*"
              : "Полное имя и фамилия*"}
          </p>
        </InputWrappers>

        <InputWrappers className="ups-group">
          <Inputs name="email" type="email" required onChange={changeRepeat} />
          <p className={inputValue && "stay"}>
            {value == "ENG"
              ? "Email or phone number*"
              : value == "UZB"
              ? "Elektron Pochta/telefon raqam"
              : "Электронная почта/номер телефона"}
          </p>
        </InputWrappers>

        <InputWrappers className="up-group">
          <Inputs name="password" type="password" onChange={changeRepeat} />
          <p className="password-label">
            {value == "ENG"
              ? "Create New Password*"
              : value == "UZB"
              ? "Yangi Parol Yarating*"
              : "Придумайте пароль*"}
          </p>
        </InputWrappers>
        <NavLink to={path} style={{ textDecoration: "none" }}>
          <Button onClick={() => checkUser()}>
            {value == "ENG"
              ? "SIGN UP"
              : value == "UZB"
              ? "AKAUNT YARATISH"
              : "ЗАРЕГИСТРИРОВАТЬСЯ"}
          </Button>
        </NavLink>
        <Subtitles style={{ color: "black" }}>
          {l == "ENG"
            ? "Already have account?"
            : l == "UZB"
            ? "Akauntingiz Bormi?"
            : "Уже есть аккаунт?"}
          <NavLink to="/signin" style={{ textDecoration: "none" }}>
            <Subtitles>
              {l == "ENG"
                ? "Signin"
                : l == "UZB"
                ? "Akauntga Kirish"
                : "Войти в аккаунт"}
            </Subtitles>
          </NavLink>
        </Subtitles>
      </Form>
    </Container>
  );
};

export default Singup;
