import { styled } from "styled-components";

export const Main = styled.div`
  position: relative;
  margin: 0 auto;
  /* background-color: grey; */
  /* z-index: -20; */
  /* width: 100%; */
  /* height: 120px; */
  /* position: fixed; */
  /* top: 0; */
  /* background-color: beige; */
  /* padding: 2px; */
`;

export const Background = styled.div`
  width: 100%;
  background-color: blue;
  z-index: 4599;
  height: 300px;
  /* position: absolute; */
`;

export const Container = styled.div`
  padding: 0px 50px;
  position: absolute;
  top: 0px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: sticky; */
  z-index: 43000000;
  /* top: 20px; */
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

export const Xon = styled.h1`
  font-weight: bold;
  color: white;
  z-index: 3400000;
  font-size: 80px;
  
`;

export const List = styled.ul`
  list-style-type: none;
  z-index: 3400000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 20px;
  margin-bottom: 45px;
`;

export const Item = styled.li`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Icon = styled.div`
  background: transparent;
  border: 1px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 450;
  position: relative;
`;

export const Parts = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;
export const Round = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  background: blue;
  color: #fff;
  position: absolute;
  z-index: 450;
  top: -5px;
  right: -5px;
`;

export const Shop = styled(Parts)`
  justify-content: center;
  z-index: 45000000000;
  margin-bottom: 25px;
  @media only screen and (max-width: 450px) {
    order: 2;
  }
`;
