import { styled } from "styled-components"

export const Main = styled.div`
width:  100%;
height: 100vh;
margin: 0 auto;

`

export const Container = styled.div`
width: 100%;
height: 100%;
`

export const Left = styled.div`
flex: 1;
background-image: url(${({img})=>img});
`