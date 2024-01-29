import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  color: #fff;

  @media only screena and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  background: #fff;
  width: 100px;
  padding: 10px 5px;
  z-index: 1000000000;
  /* box-shadow: 4px 7px 15px #e6e4e4; */
`;

export const Item = styled(Container)`
  width: 70px;
  justify-content: space-between;
  color: grey;
  @media only screena and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const Flag = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;
