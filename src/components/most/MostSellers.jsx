import React from "react";
import { Back, Container, Main, Content } from "./style";
import back from "../../assets/images/bottomCard/bottom11png.webp";
import back1 from "../../assets/images/topCard/left.jpg";
import { Blur } from "../video/style";
import Button from "..//generics/button/Button";
import Title from "..//generics/title/Title";
// import {Content} from "../mini/gucciLido/style"
// import { Title } from '../cards/productSliderCard/style';

const MostSellers = () => {
  return (
    <Main>
      {/* <Blur></Blur> */}
      <Container className="center">
        <Back className="alignEnd" backimg={back}>
          <Content className="columnAlignEnd">
            <Title type="gucci">Pre-FALL 2024</Title>
            <Button type="gucci">EXPLORE FORMAL COLLECTION</Button>
          </Content>
        </Back>
        <Back className="alignEnd" backimg={back1}>
          <Content className="columnAlignEnd">
            <Title type="gucci">Sport Offers</Title>
            <Button type="gucci">EXPLORE SPORT COLLECTION</Button>
          </Content>
        </Back>
      </Container>
    </Main>
  );
};

export default MostSellers;
