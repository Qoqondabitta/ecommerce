import React from 'react'
import { Container, Details, Img } from './style'

const Product = ({list}) => {
  return (
    <>
      {list.map((v, i) => (
          <Container key={i}>
              <Img src={v.bg} alt={v.f[0]} />
              <Details>{ v.f[0]}</Details>
        </Container>
      ))}
    </>
  );
}

export default Product