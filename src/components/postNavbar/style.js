import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 7px 15px #e6e4e4;
  padding: 20px 0px;
  background: #01172c;

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
  @media only screen and (max-width: 1300px) {
    justify-content: flex-end;
  }
  @media only screen and (max-width: 450px) {
    justify-content: flex-start;
  }
`;

export const Search = styled(Parts)`
  justify-content: flex-start;
  gap: 5px;
  width: 850px;

  @media only screen and (max-width: 1300px) {
    justify-content: center;
  }
  @media only screen and (max-width: 450px) {
    order: 1;
    margin: 0 auto;
  }
`;

export const Shop = styled(Parts)`
  justify-content: flex-end;
  width: 100px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #fff;

  @media only screen and (max-width: 1300px) {
    width: 90%;
    padding: 11.5px 20px;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
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
  justify-content: center;
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

export const Category = styled.button`
  background: red;
  border-radius: 5px;
  border: none;
  gap: 5px;
  width: 150px;
  height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  position: relative;
`;
