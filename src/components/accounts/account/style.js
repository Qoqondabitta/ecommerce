import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Hero = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  position: relative;
  /* background-color: orange; */
`;

export const ProfilePhoto = styled.div`
  gap: 20px;
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  /* background-color: red; */
  padding: 0px 50px;
`;

export const Input = styled.input``;

export const Mask = styled.button`
  margin-top: 20px;
  border-radius: 2px;
  background-color: black;
  color: white;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  font-family: "DM Serif Display", serif;
  border: none;
  letter-spacing: 0.1rem;
  transition: all 0.25s;
  text-transform: capitalize;

  &:hover {
    transform: scale(0.9);
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 270px;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.div`
font-size: 40px;
font-family: "DM Serif Display", serif;
letter-spacing: 0.1rem;
`


export const List = styled.ul`
  list-style-type: none;
  z-index: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 20px;
  margin-bottom: 45px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
