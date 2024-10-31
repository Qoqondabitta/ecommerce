import React from "react";
import { Container, Main, Statement } from "./style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import "./unsubscribe.css";

const Unsubscribe = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <Statement>
          {l == "ENG"
            ? "Please enter your e-mail address below and we will remove you from our mailing list."
            : l == "UZB"
            ? "Iltimos, quyida elektron pochta manzilingizni kiriting va biz sizni pochta ro'yxatidan olib tashlaymiz."
            : "Пожалуйста, введите свой адрес электронной почты ниже, и мы удалим вас из нашего списка рассылки."}
        </Statement>
        <form className="center">
          <input
            className="email-input"
            placeholder={
              l == "ENG"
                ? "e-mail address"
                : l == "UZB"
                ? "elektron pochta manzil"
                : "адрес электронной почты"
            }
          />
          <button className="email-button" type="submit">
            {l == "ENG"
              ? "Unsubscribe"
              : l == "UZB"
              ? "bekor qilish"
              : "Отписаться"}
          </button>
        </form>
      </Container>
      <Footer />
    </Main>
  );
};

export default Unsubscribe;
