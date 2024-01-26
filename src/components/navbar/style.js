import { styled } from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Parts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex: 1;
  @media only screen and (max-width: 450px) {
    justify-content: flex-start;
  }
`;

export const Search = styled(Parts)`
  justify-content: center;

  @media only screen and (max-width: 450px) {
    order: 1;
    margin: 0 auto;
  }
`;

export const Shop = styled(Parts)`
    justify-content: flex-end;
  @media only screen and (max-width: 1300px) {
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid grey;
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
  top: -13px;
  right: -10px;
`;

export const Language = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
