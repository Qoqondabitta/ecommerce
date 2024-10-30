import React, { useState } from "react";
import {
  Answer,
  Container,
  Main,
  QaButton,
  QaButtonLink,
  QaTitle,
  Question,
  QuestionWrapper,
  Wrapper,
} from "./style";
import Footer from "../footer/Footer";
import Nav from "../navbars/blackNavbar/Nav";
import { faqs } from "../../constants/componentsContants/faqsConstants/faqs";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import "./faqs.css";

const Faqs = () => {
  const [newId, setNewId] = useState(null);
  const l = useSelector((store) => store.language.value);
  const changeShow = (id) => {
    setNewId(newId == id ? null : id);
  };
  return (
    <>
      <Main className="columnCenter">
        <Nav />
        <Container className="columnCenter">
          <QuestionWrapper>
            <QaTitle>
              {l == "ENG"
                ? "Frequently Asked Questions"
                : l == "UZB"
                ? "Ko'p So'raladigan Savollar"
                : "Часто задаваемые вопросы"}
            </QaTitle>
            {faqs.map((v, i) => (
              <Wrapper id={`${newId == i ? "wrapper" : "wrapper-up"}`} key={i}>
                <Question onClick={() => changeShow(i)}>
                  {l == "ENG" ? v.q[0] : l == "UZB" ? v.q[1] : v.q[2]}
                  <IoIosArrowDown
                    color="black"
                    className={`${
                      newId == i ? "rot" : "arrow"
                    } starting-position`}
                  />
                </Question>
                <Answer id={`${newId == i ? "answer" : "not-answer"}`}>
                  {l == "ENG" ? v.a[0] : l == "UZB" ? v.a[1] : v.a[2]}
                </Answer>
              </Wrapper>
            ))}
              <QaButtonLink href="https://t.me/turgunalievsarvar">
            <QaButton>
                {l == "ENG"
                  ? "More Questions"
                  : l == "UZB"
                  ? "Ko'proq Savollar"
                  : "Еще вопросы"}
            </QaButton>
              </QaButtonLink>
          </QuestionWrapper>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Faqs;
