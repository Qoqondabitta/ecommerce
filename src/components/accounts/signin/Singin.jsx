import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Form,
  Inputs,
  InputWrappers,
  Labels,
  Remember,
  Subtitles,
  Title,
} from "./style";
import { useSelector } from "react-redux";
import "./signin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { usersList, validEmails } from "../../../constants/users/in";
// import { Button } from "../../generics/button/Button";

const Singin = () => {
  const l = useSelector((store) => store.language.value);
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  const { value } = useSelector((stroe) => stroe.language);
  const [inputValue, setInputValue] = useState(null);
  const [password, setPassword] = useState(null);
  const [users, setUsers] = useState(null);
  const localemail = localStorage.getItem("email");
  const localepassword = localStorage.getItem("password");
  const getValue = (e) => {
    setInputValue(e.target.value);
  };
  const changeValue = (e) => {
    setPassword(e.target.value);
  };
  let a = [];
  let b = [];
  let c = [];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);
  const checkUser = () => {
    users.map((v) => a.push(v.email));
    validEmails.push(...a);
    validEmails.push(localemail);
    usersList.map((v) => b.push(v.name));
    users.map((v) => c.push(v.username));
    b.push(localepassword);
    b = [...b, ...c];
    console.log(validEmails);
    if (validEmails.includes(inputValue) && b.includes(password)) {
      setPath("/account");
    } else {
      setPath("/collection");
    }
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
        <InputWrappers className="emails-group">
          <Inputs className="email" type="email" required onChange={getValue} />
          <p className={inputValue && "stay"}>
            {value == "ENG"
              ? "Email or phone number"
              : value == "UZB"
              ? "Elektron Pochta yoki telefon nomer"
              : "Электронная почта или номер телефона"}
          </p>
        </InputWrappers>

        <InputWrappers className="email-group">
          <Inputs className="password" type="password" onChange={changeValue} />
          <p className="password-label">
            {value == "ENG"
              ? "Create Password"
              : value == "UZB"
              ? "Parol Yarating"
              : "Придумайте пароль"}
          </p>
        </InputWrappers>
        <Box>
          <Remember>
            <input type="checkbox" />
            <Subtitles style={{ color: "black" }}>
              {l == "ENG"
                ? "Remember Me"
                : l == "UZB"
                ? "Eslab Qolish"
                : "Запомнить меня"}
            </Subtitles>
          </Remember>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            <Subtitles>
              {l == "ENG"
                ? "Forgot Passowrd?"
                : l == "UZB"
                ? "Parolni Eslolmayapsizmi?"
                : "Забыли пароль?"}
            </Subtitles>
          </NavLink>
        </Box>
        <NavLink to={path} style={{ textDecoration: "none" }}>
          <Button onClick={() => checkUser()}>
            {value == "ENG" ? "SIGNIN" : value == "UZB" ? "KIRISH" : "ВОЙТИ"}
          </Button>
        </NavLink>
        <Subtitles style={{ color: "black", marginTop: "10px" }}>
          {l == "ENG"
            ? "Not a member yet?"
            : l == "UZB"
            ? "Hali Azo Bo'lmaganmisiz?"
            : "Еще не присоединился?"}
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            <Subtitles>
              {" "}
              {value == "ENG"
                ? "SIGN UP"
                : value == "UZB"
                ? "AKAUNT YARATISH"
                : "ЗАРЕГИСТРИРОВАТЬСЯ"}
            </Subtitles>
          </NavLink>
        </Subtitles>
      </Form>
    </Container>
  );
};

export default Singin;
