import React from 'react'
import { Container, Item, List, Types } from './style'

const Categories = ({position}) => {
  return (
    <Container position={position}>
      <List>
        <Types>Top</Types>
        <Item>Jeans</Item>
        <Item>Trousers</Item>
        <Item>Casual</Item>
        <Item>Classic</Item>
        <Item>Shorts</Item>
        <Item>Shorts</Item>
        <Item>Ti-horts</Item>
        <Item>Accessories</Item>
      </List>
      <List>
        <Types>Bottom</Types>
        <Item>Jeans</Item>
        <Item>Trousers</Item>
        <Item>Casual</Item>
        <Item>Classic</Item>
        <Item>Shorts</Item>
        <Item>Ti-horts</Item>
      </List>
      <List>
        <Types>Accessories</Types>
        <Item>Watch</Item>
        <Item>Belts</Item>
        <Item>Bracelets</Item>
        <Item>Parfumes</Item>
        <Item>Rings</Item>
      </List>
    </Container>
  );
}

export default Categories