import React from "react";
import { Back, Container, Main } from "./style";
import Button from "..//generics/button/Button";
import Title from "../generics/title";
import { Bunker } from "../generics";
import {
  mostconstants,
  mostkids,
  mostperfume,
  mostwoman,
} from "../../constants/componentsContants/most";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeCollection } from "../../redux/collection";

const MostSellers = () => {
  const order = useSelector((store) => store.order);
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Container className="center ">
        {(order.value == 0
          ? mostwoman
          : order.value == 1
          ? mostconstants
          : order.value == 2
          ? mostkids
          : mostperfume
        ).map((v, i) => (
          <Back
            className={v.p}
            backimg={
              order.value == 0
                ? v.b.source
                : order.value == 1
                ? v.b.source
                : order.value == 2
                ? v.b.source
                : v.b.source
            }
            key={i}
            position={
              order.value == 0
                ? v.b.placement
                : order.value == 1
                ? v.b.placement
                : order.value == 2
                ? v.b.placement
                : v.b.placement
            }
          >
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
