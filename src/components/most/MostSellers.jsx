import React from "react";
import { Back, Container, Main, Content } from "./style";
import Button from "..//generics/button/Button";
import Title from "../generics/title";
import { Bunker } from "../generics";
import { mostconstants } from "../../constants/componentsContants/most";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";

const MostSellers = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Container className="center ">
        {mostconstants.map((v, i) => (
          <Back className={v.p} backimg={v.b} key={i}>
            <Bunker type={v.ty} className={v.sp}>
              <Title type={v.te.t}>
                {value == "ENG"
                  ? v.te.ch[0]
                  : value == "RUS"
                  ? v.te.ch[2]
                  : v.te.ch[1]}
              </Title>
              <NavLink
                to="/collection"
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(changeCollection(v.l))}
              >
                <Button type={v.te.t}>
                  {value == "ENG"
                    ? v.btn[0]
                    : value == "RUS"
                    ? v.btn[2]
                    : v.btn[1]}
                </Button>
              </NavLink>
            </Bunker>
          </Back>
        ))}
      </Container>
    </Main>
  );
};

export default MostSellers;
