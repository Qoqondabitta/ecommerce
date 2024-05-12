import React from "react";
import { Container, Item, List, Main } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { TabTitels } from "../../constants/tab";
import "./tab.css";

const ClothTab = () => {
  const { value } = useSelector((store) => store.title);
  const language = useSelector((store) => store.language);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <Main>
      <Container>
        <List className="center">
          {TabTitels.map((v) => (
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
