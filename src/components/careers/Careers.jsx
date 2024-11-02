import React from "react";
import { Main } from "../sitemap/style";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import "./career.css";
import { CareerStatement, Container } from "./style";
import { useSelector } from "react-redux";

const Careers = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <CareerStatement>
          {l == "ENG"
            ? "Please, below enter a job position you are appling for and your email address."
            : l == "UZB"
            ? "Iltimos, topshirmoqchi bo'lgan ish o'rni va elektron pochta manzilingizni kiriting."
            : "Пожалуйста, укажите должность, на которую вы претендуете, и свой адрес электронной почты."}
        </CareerStatement>
        <form className="center">
          <input
            className="career-input"
            placeholder={
              l == "ENG"
                ? "job position"
                : l == "UZB"
                ? "ish o'rni"
                : "должность"
            }
          />
          <button className="career-button" type="submit">
            {l == "ENG"
              ? "Submit"
              : l == "UZB"
              ? "Jo'natish"
              : "отправить"}
          </button>
        </form>
        <form className="center">
          <input
            className="career-input"
            placeholder={
              l == "ENG"
                ? "e-mail address"
                : l == "UZB"
                ? "elektron pochta manzil"
                : "адрес электронной почты"
            }
          />
          <button className="career-button" type="submit">
            {l == "ENG"
              ? "Submit"
              : l == "UZB"
              ? "Jo'natish"
              : "отправить"}
          </button>
        </form>
      </Container>
      <Footer />
    </Main>
  );
};

export default Careers;
