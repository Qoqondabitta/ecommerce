import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flag, Item, List, Wrapper } from "./style";
import UZ from "../../assets/images/uzbek.png";
import RUS from "../../assets/images/usa.png";
import ENG from "../../assets/images/rus.png";
import { russian, english, uzbek } from "../../redux/language";
import { IoIosArrowDown } from "react-icons/io";

const Drop = () => {
  const language = useSelector((store) => store.language);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        {language.value}
        {language.value === "ENG" ? (
          <Flag src={RUS} />
        ) : language.value === "RUS" ? (
          <Flag src={ENG} />
        ) : language.value === "UZB" ? (
          <Flag src={UZ} />
        ) : null}
        <IoIosArrowDown />;
      </Container>
      <List>
        <Item onClick={() => dispatch(english())}>
          ENG <Flag src={RUS} />
        </Item>
        <Item onClick={() => dispatch(russian())}>
          RUS <Flag src={ENG} />
        </Item>
        <Item onClick={() => dispatch(uzbek())}>
          UZB <Flag src={UZ} />
        </Item>
      </List>
    </Wrapper>
  );
};

export default Drop;
