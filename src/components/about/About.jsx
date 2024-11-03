import React from "react";
import { Main } from "../sitemap/style";
import {
  AboutBanner,
  AboutFind,
  AboutHelp,
  AboutText,
  AboutTitle,
  Container,
} from "./style";
import { useSelector } from "react-redux";
import Nav from "../navbars/blackNavbar/Nav";
import Footer from "../footer/Footer";
import xonofficialbackground from "../../assets/images/backgrounds/xonofficialbackground.jpg";
import { about } from "../../constants/componentsContants/about";
import { NavLink } from "react-router-dom";
import "./about.css";

const About = () => {
  const l = useSelector((state) => state.language.value);
  return (
    <Main className="columnCenter">
      <Nav />
      <Container className="columnCenter">
        <AboutTitle>
          {l == "ENG" ? "About Xon" : l == "UZB" ? "Xon Haqida" : "Про XOH"}
        </AboutTitle>
        <AboutBanner
          loading="lazy"
          alt="XON Online Store"
          src={xonofficialbackground}
        />
        {about.map((v, i) => {
          return (
            <AboutText key={i}>
              {l == "ENG" ? v.t[0] : l == "UZB" ? v.t[1] : v.t[2]}
            </AboutText>
          );
        })}
        <AboutHelp>
          {l == "ENG"
            ? "May we help you?"
            : l == "UZB"
            ? "yordam bera olamizmi?"
            : "Можем помочь?"}
        </AboutHelp>
        <AboutFind>
          {l == "ENG"
            ? "Find out everything you need to know about the XON universe with a Client Advisor."
            : l == "UZB"
            ? "XON olami haqida bilishingiz kerak bo'lgan hamma narsani mijoz maslahatchisi bilan bilib oling."
            : "Узнайте все, что вам нужно знать о вселенной XOH, у консультанта по работе с клиентами."}
        </AboutFind>
        <NavLink to="/service" className="about-link">
          {l == "ENG"
            ? "Contact XON Client Services"
            : l == "UZB"
            ? "XON Mijoz Hizmatlaridan Faydalaning"
            : "служба поддержки клиентов XON"}
        </NavLink>
      </Container>
      <Footer />
    </Main>
  );
};

export default About;
