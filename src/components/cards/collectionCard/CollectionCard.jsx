import React from "react";
import { Container, Data, Icon, Subtitle } from "./style";
import { GoHeart as Heart } from "react-icons/go";
import cardimg from "../../../assets/images/collection/men/collectioncard3.webp"
import cardimg2 from "../../../assets/images/collection/men/collectioncard4alternative.jpg";

const CollectionCard = () => {
    return (
      <>
        <Container bgimg={cardimg} position="bottom" alternative={cardimg2}>
          <Icon>
            <Heart color="black" size="1.4rem" />
          </Icon>
          <Data>
            <Subtitle>Aiel Helvani</Subtitle>
            <Subtitle style={{ marginTop: "20px" }}>10$</Subtitle>
            <Subtitle underline="true">Shop now</Subtitle>
          </Data>
        </Container>
      </>
    );
};

export default CollectionCard;
