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
import { useNavigate } from "react-router-dom";
import { usersList } from "../../../constants/users/in";
// import { Button } from "../../generics/button/Button";

const Singin = () => {
  const navigate = useNavigate();
  const { value } = useSelector((stroe) => stroe.language);
  const [inputValue, setInputValue] = useState(null);
  const [users, setUsers] = useState(null);
  const getValue = (e) => {
    setInputValue(e.target.value);
  };
console.log(inputValue, "email");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);
    // let list = [...users, ...usersList];
    // let list = users.push(...usersList);
    // let list = users.push({me:"me"})
    // console.log(list);
    console.log(usersList[0].name==inputValue);
  const checkUser = () => {
    usersList.map((v, i) => {
    //   if (inputValue == v.name) {
    //     navigate("/account");
    //   } else {
    //     navigate("/home");
        //   }
        v.email==inputValue?navigate("/account"):navigate("/home")

    });
  };

  console.log(users);
  return (
    <Container>
      <Form >
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
          <Inputs className="password" type="password" />
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
        <Button onClick={()=>checkUser()}>
          {value == "ENG" ? "SIGNIN" : value == "UZB" ? "KIRISH" : "ВОЙТИ"}
        </Button>
        <Subtitles style={{ color: "black", marginTop: "10px" }}>
          Not a member yet? <Subtitles> Sign up</Subtitles>
        </Subtitles>
      </Form>
    </Container>
  );
};

export default Singin;
