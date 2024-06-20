import { styled } from "styled-components";

export const Main = styled.div`
  position: relative;
  margin: 0 auto;
  `;

export const Container = styled.div`
  padding: 0px 50px;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* z-index: 4300000000000000; */
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
/* background-color: blue; */
  @media only screen and (max-width: 600px) {
    padding: 10px 10px 0px 20px;
    height: 40px;
  }
  @media only screen and (max-width: 500px) {
    padding: 10px 10px 0px 20px;
  }
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

  @media only screen and (max-width: 1000px) {
    display: none;
  }
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
  width: 40px;
  height: 40px;
  z-index: 4500;
  position: relative;
  top: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
    top: -2px;
  }
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

  @media only screen and (max-width: 600px){
    font-size: 8px;
    height: 12px;
    width: 12px;
    top: 0%;
    right: 0%;
  }
`;

export const Shop = styled(Parts)`
  justify-content: center;
  z-index: 45000000000;
  margin-bottom: 25px;
  @media only screen and (max-width: 600px) {
    order: 2;
    gap: 0px;
    align-items: flex-start;
    margin-bottom: 0px;
    /* background-color: red; */
  }
`;
