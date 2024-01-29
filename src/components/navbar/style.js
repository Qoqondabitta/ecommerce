import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 7px 15px #e6e4e4;
  padding: 20px 0px;

  @media only screen and (max-width: 450px) {
    padding: 15px 0px;
    align-items: flex-start;
  }
`;

export const Parts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex: 1;
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
  @media only screen and (max-width: 450px) {
    order: 1;
    margin: 0 auto;
  }
`;

export const Shop = styled(Parts)`
  justify-content: flex-end;
  position: relative;
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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Top = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
`;

export const Center = styled.p`
  line-height: 14px;
  font-weight: bold;
  font-size: 16px;
`;

export const Bottom = styled.p`
  line-height: 14px;
  font-weight: bold;
  font-size: 18px;
`;

export const Post = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
