import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: red;
`;

export const Hero = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  position: relative;
`;

export const ProfilePhoto = styled.div`
  /* border-radius: 50%; */
  /* width: 250px; */
  /* height: 200px; */
  position: relative;
  /* border: 1px solid black; */
  /* background-image: url(${({ bg }) => bg?bg:""}); */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  z-index: 0;
`;

export const Orders = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  position: absolute;
  right: 10px;
  bottom: 10px;
  /* display: none; */
`;

export const Label = styled.div`
position: absolute;
right: 0px;
bottom: 30px;
padding: 4px 4px 2px 4px;
border-radius: 20px;
border: 1px solid black;
z-index: 1;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 200px;
  position: relative;
`;