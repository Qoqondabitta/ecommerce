import React from 'react'
import { Back, Container, Main } from './style'
import back from "../../assets/images/bottomCard/bottom11.png"
import back1 from "../../assets/images/topCard/left.jpg";
import { Blur } from '../video/style';

const MostSellers = () => {
    return (
      <Main>
        <Blur></Blur>
        <Container className="center">
          <Back backimg={back}></Back>
          <Back backimg={back1}></Back>
        </Container>
      </Main>
    );
}

export default MostSellers