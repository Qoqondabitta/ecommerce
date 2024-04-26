import React from 'react'
import { Button, Container, Content, Main, Motiv, Text, Title } from './style'
import background from "../../assets/images/topCard/new.jpg"
import { Blur } from '../video/style';
import { FaCrown } from "react-icons/fa";
import "./soon.css"

const Soon = () => {
    return (
      <Main>
        <Blur></Blur>
        <Container img={background}>
          <Content className="">
            <Motiv>
              <Title className='end'>
                <FaCrown className='crown' /><i>XON</i>
              </Title>
              #Train#Wear#Enjoy With Us
            </Motiv>
            <Text>
              New Tracksuit Collection for warm-weather trainings are available
              right now
            </Text>
            <Button>Shop</Button>
          </Content>
        </Container>
      </Main>
    );
}

export default Soon