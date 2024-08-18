import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px){
    justify-content: center;
  }
`