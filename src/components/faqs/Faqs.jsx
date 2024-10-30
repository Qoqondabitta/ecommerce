import React, { useState } from "react";
import {
  Answer,
  Container,
  Main,
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
  const [show, setShow] = useState(false);
  const l = useSelector((store) => store.language.value);
  const changeShow = (id, falseId=100) => {
    console.log(newId==id, falseId);
    id == setNewId ? setNewId(falseId) : setNewId(id);
    console.log(id, "id");
    // id === setNewId ? setShow(false) : setShow(true);
  };
  console.log(newId, "newId");
  return (
    <>
      <Main>
        <Nav />
        <Container className="columnCenter">
          <QuestionWrapper>
            {faqs.map((v, i) => (
              <Wrapper key={i}>
                <Question onClick={() => changeShow(i)}>
                  {l == "ENG" ? v.q[0] : l == "UZB" ? v.q[1] : v.q[2]}
                  <IoIosArrowDown
                    color="black"
                    // onClick={() => changeShow(i)}
                    className={`${
                      newId == i ? "rot" : "arrow"
                    } starting-position`}
                  />
                </Question>
                {newId == i && (
                  <Answer id={`${newId == i ? "answer" : "not-answer"}`}>
                    {l == "ENG" ? v.a[0] : l == "UZB" ? v.a[1] : v.a[2]}
                  </Answer>
                )}
              </Wrapper>
            ))}
          </QuestionWrapper>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Faqs;
