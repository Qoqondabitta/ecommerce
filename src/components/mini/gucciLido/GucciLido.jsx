import React from "react";
import { Container, Content } from "./style";
import Button from "../../generics/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  exploreKids,
  exploreMen,
  explorePerfumes,
  exploreWomen,
} from "../../../constants/buttonConstants/buttonConstants";
import Title from "../../generics/title";
import { Navigate, NavLink } from "react-router-dom";
import { changeCollection } from "../../../redux/collection";
// import { collectioncardsuits } from "../../../constants/componentsContants/collection/collectionsuit";
import { cardfrank } from "../../../constants/componentsContants/collection/collectionsport";

const GucciLido = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.language);
  const order = useSelector((store) => store.order);
  console.log(value, "odx");
  const mapItem =
    order.value == 0
      ? exploreWomen
      : order.value == 1
      ? exploreMen
      : order.value == 2
      ? exploreKids
      : explorePerfumes;
  return (
    <Container className="columnCenter">
      <Content className="columnCenter">
        <Title type="gucci">Xon Stores</Title>
        {(order.value == 0
          ? exploreWomen
          : order.value == 1
          ? exploreMen
          : order.value == 2
          ? exploreKids
          : explorePerfumes
        ).map((v, i) => (
          <NavLink style={{textDecoration: "none"}} to="/collection" onClick={()=>dispatch(changeCollection(cardfrank))}>
            <Button style={{ background: "white" }} type="gucci" key={i}>
              {value == "ENG"
                ? v.title[0]
                : value == "UZB"
                ? v.title[1]
                : v.title[2]}
            </Button>
          </NavLink>
        ))}
      </Content>
    </Container>
  );
};

export default GucciLido;
