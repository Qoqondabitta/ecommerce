import React from "react";
import { Container, Item, List, Main } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { perfumeTitles, TabTitels } from "../../constants/tab";
import "./tab.css";

const ClothTab = () => {
  const { value } = useSelector((store) => store.title);
  const language = useSelector((store) => store.language);
  const order = useSelector((store) => store.order.value);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <Main>
      <Container>
        <List className="center">
          {(order == 3 ? perfumeTitles : TabTitels).map((v) => (
            <Item
              key={v.id}
              className={v.check == value ? "top" : ""}
              onClick={() => {
                dispatch(v.function);
              }}
            >
              {language.value == "ENG"
                ? v.name[0]
                : language.value == "RUS"
                ? v.name[2]
                : v.name[1]}
            </Item>
          ))}
        </List>
      </Container>
    </Main>
  );
};

export default ClothTab;
