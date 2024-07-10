import React from "react";
import {
  Box,
  Collection,
  Container,
  Left,
  Main,
  Right,
  TwoHalf,
  Wrapper,
} from "./style";
import main from "../../../assets/images/backgrounds/mens-fashion-2024.webp";
import Nav from "../../navbars/secondNav/Nav";
// import Nav from "../../navbars/secondNav/Nav";
import { Title } from "../../generics";
import { useSelector } from "react-redux";
import {
  collectioncardconstants,
  menscollection,
  threcollectioncard,
} from "../../../constants/componentsContants/collection";
import CollectionCard from "../../cards/collectionCard/CollectionCard";
import HalfScreenCard from "../../cards/collectionCard/halfscreencard/HalfScreenCard";
import Footer from "../../footer/Footer"
import { collectioncardsuits } from "../../../constants/componentsContants/collectionsuit";

const Mens = () => {
  const { value } = useSelector((store) => store.language);
  return (
    <Main>
      <Nav />
      <Container bg={main} className="columnCenter">
        {menscollection.map((v, i) => (
          <Title type={v.ty} color={v?.color}>
            {value == "ENG" ? v.c[0] : value == "UZB" ? v.c[1] : v.c[2]}
          </Title>
        ))}
      </Container>
      <Wrapper>
        <Box>
          <Collection>
            <CollectionCard list={collectioncardsuits}></CollectionCard>
          </Collection>
          {/* <TwoHalf>
            <Left>
              <CollectionCard list={threcollectioncard[0].two}></CollectionCard>
            </Left>
            <Right>
              <HalfScreenCard item={threcollectioncard[0].one}></HalfScreenCard>
            </Right>
          </TwoHalf> */}
        </Box>
      </Wrapper>
      <Footer />
    </Main>
  );
};

export default Mens;
