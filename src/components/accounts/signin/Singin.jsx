import React from "react";
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
// import { Button } from "../../generics/button/Button";

const Singin = () => {
  const { value } = useSelector((stroe) => stroe.language);
  return (
    <Container>
      <Form>
        <Title>
          Join
          <Title style={{display: "flex", gap: "10px"}}>
            <Title>XON</Title> Community
          </Title>
        </Title>
        <InputWrappers className="emails-group">
          <Inputs className="email" type="email" />
          <p className="email-label">
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
        <Button>
          {value == "ENG" ? "SIGNIN" : value == "UZB" ? "KIRISH" : "ВОЙТИ"}
        </Button>
        <Subtitles style={{ color: "black", marginTop: "10px" }}>
          Not a member yet? <Subtitles> Sign up</Subtitles>
        </Subtitles>
        {/* <Button type="black">SIGNIN</Button> */}

        {/* <InputWrappers className="password-group">
          <Inputs className="text" type="text" />
          <p className="password-label">
            {value == "ENG"
              ? "Name"
              : value == "UZB"
              ? "Ism"
              : "Parol"}
          </p>
        </InputWrappers> */}
      </Form>
    </Container>
  );
};

export default Singin;
