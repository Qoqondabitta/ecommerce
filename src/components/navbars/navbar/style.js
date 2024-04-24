import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 4px 7px 15px #e6e4e4; */
  padding: 20px 0px;
  background: #01172c;
  border-bottom: 1px solid grey;

  @media only screen and (max-width: 450px) {
    padding: 15px 0px;
    align-items: flex-start;
  }
`;

export const Parts = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex: 1;
  @media only screen and (max-width: 1300px) {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 450px) {
    justify-content: flex-start;
  }
`;

export const Search = styled(Parts)`
  justify-content: flex-end;
  gap: 5px;
  @media only screen and (max-width: 450px) {
    order: 1;
    margin: 0 auto;
  }
`;

export const Shop = styled(Parts)`
  justify-content: center;

  @media only screen and (max-width: 450px) {
    order: 2;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #fff;
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
  top: -5px;
  right: -5px;
`;

export const Language = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: grey;
  cursor: pointer;
`;

export const Combine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Post = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Icon = styled.div`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 450px) {
    gap: 32px;
  }
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media only screen and (max-width: 1300px) {
    font-size: 16px;
  }
`;
