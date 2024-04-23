import { styled } from "styled-components";

export const Main = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 430;
  top: 20px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

export const Xon = styled.h1`
  font-weight: bold;
  color: white;
  z-index: 340;
  font-size: 80px;
`;

export const List = styled.ul`
  list-style-type: none;
  z-index: 340;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 20px;
  margin-bottom: 25px;
`;

export const Item = styled.li`
  color: white;
  font-size: 18px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Icon = styled.div`
  background: transparent;
  border: 1px solid #fff;
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
  z-index: 450;
  @media only screen and (max-width: 450px) {
    order: 2;
  }
`;
