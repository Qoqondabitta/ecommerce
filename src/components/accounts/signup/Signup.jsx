import React, { useState } from "react";
import {
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
  const { value } = useSelector((stroe) => stroe.language);
  const [inputValue, setInputValue] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeat, setRepeat] = useState(null);
  const changeRepeat = (e) => {
    const { name, value } = e.target;
    name == "email"
      ? setInputValue(value)
      : name == "password"
      ? setPassword(value)
      : setRepeat(value);
  };
  const checkUser = () => {
      localStorage.setItem("fullname", repeat);
      localStorage.setItem("email", inputValue);
      localStorage.setItem("password", password);
      repeat&&password&&inputValue?setPath("/signin"):alert("Fill Every Gap or check eroors")
  };

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
              ? "Full Name*"
              : value == "UZB"
              ? "To'liq Ism*"
              : "Полное имя"}
          </p>
        </InputWrappers>

        <InputWrappers className="ups-group">
          <Inputs name="email" type="email" required onChange={changeRepeat} />
          <p className={inputValue && "stay"}>
            {value == "ENG"
              ? "Email or phone number"
              : value == "UZB"
              ? "Elektron Pochta yoki telefon nomer"
              : "Электронная почта или номер телефона"}
          </p>
        </InputWrappers>

        <InputWrappers className="up-group">
          <Inputs name="password" type="password" onChange={changeRepeat} />
          <p className="password-label">
            {value == "ENG"
              ? "Create Password"
              : value == "UZB"
              ? "Parol Yarating"
              : "Придумайте пароль"}
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
            : "Уже есть аккаунт?"}{" "}
          <Subtitles>
            {" "}
            {l == "ENG"
              ? "Signin"
              : l == "UZB"
              ? "Akauntga Kirish"
              : "Войти в аккаунт"}
          </Subtitles>
        </Subtitles>
      </Form>
    </Container>
  );
};

export default Singup;
