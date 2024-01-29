import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flag, Item, List, Wrapper } from "./style";
import UZ from "../../assets/images/uzbek.png";
import RUS from "../../assets/images/usa.png";
import ENG from "../../assets/images/rus.png";
import { russian, english, uzbek } from "../../redux/language";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./drop.css"
import { useState } from "react";

const Drop = () => {
    const [move, setMove] = useState(false)
  const language = useSelector((store) => store.language);
  const dispatch = useDispatch();

  const iconMove = () => {
    setMove(!move)
  }
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
        <MdKeyboardArrowLeft
          onClick={iconMove}
          className={`down ${move ? "expand" : ""}`}
        />
      </Container>
      {move && (
        <List className={`dropdown-content ${move ? "collapsed" : ""}`}>
          <Item onClick={() => {dispatch(english()); setMove(!move)}}>
            ENG <Flag src={RUS} />
          </Item>
          <Item onClick={() => {dispatch(russian()); setMove(!move)}}>
            RUS <Flag src={ENG} />
          </Item>
          <Item onClick={() => {dispatch(uzbek()); setMove(!move)}}>
            UZB <Flag src={UZ} />
          </Item>
        </List>
      )}
    </Wrapper>
  );
};

export default Drop;
