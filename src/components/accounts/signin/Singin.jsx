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
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  const { value } = useSelector((stroe) => stroe.language);
  const [inputValue, setInputValue] = useState(null);
  const [password, setPassword] = useState(null);
  const [users, setUsers] = useState(null);
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
    usersList.map((v) => b.push(v.name));
    users.map((v) => c.push(v.username));
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
          Join
          <Title style={{ display: "flex", gap: "10px" }}>
            <Title>XON</Title> Community
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
            <Subtitles style={{ color: "black" }}>Remember Me</Subtitles>
          </Remember>
          <Subtitles>Forgot Password?</Subtitles>
        </Box>
        <NavLink to={path} style={{ textDecoration: "none" }}>
          <Button onClick={() => checkUser()}>
            {value == "ENG" ? "SIGNIN" : value == "UZB" ? "KIRISH" : "ВОЙТИ"}
          </Button>
        </NavLink>
        <Subtitles style={{ color: "black", marginTop: "10px" }}>
          Not a member yet? <Subtitles> Sign up</Subtitles>
        </Subtitles>
      </Form>
    </Container>
  );
};

export default Singin;
