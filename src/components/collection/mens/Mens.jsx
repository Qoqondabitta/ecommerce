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
// import {
//   collectioncardconstants,
//   menscollection,
//   threcollectioncard,
// } from "../../../constants/componentsContants/collection/collection";
import {
  collectioncardconstants,
  menscollection,
  threcollectioncard,
} from "../../../constants/componentsContants/collection/collection";
import CollectionCard from "../../cards/collectionCard/CollectionCard";
import HalfScreenCard from "../../cards/collectionCard/halfscreencard/HalfScreenCard";
import Footer from "../../footer/Footer";
import { collectioncardsuits } from "../../../constants/componentsContants/collection/collectionsuit";
import { collectioncardsport } from "../../../constants/componentsContants/collection/collectionsport";
import { shoes } from "../../../constants/componentsContants/collection/shoes";
import { red } from "../../../constants/componentsContants/collection/colors/red";
import { black } from "../../../constants/componentsContants/collection/colors/black";
import { orange } from "../../../constants/componentsContants/collection/colors/orange";
// import { mixed } from "../../../constants/componentsContants/collection/colors/mixed";
import { white } from "../../../constants/componentsContants/collection/colors/white";
import { blue } from "../../../constants/componentsContants/collection/colors/blue";

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
            <CollectionCard list={collectioncardconstants}></CollectionCard>
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
