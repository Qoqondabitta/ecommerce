import React from 'react'
import { Container, Left, Main, Right } from './style'
import left from '../../assets/images/bottomCard/bottom11.png'
import right from "../../assets/images/topCard/left.jpg"

const MostSellers = () => {
  return (
    <Main className="center">
      <Container className="center">
        <Left imgs={left}></Left>
        <Right imgs={right}></Right>
      </Container>
    </Main>
  );
}

export default MostSellers