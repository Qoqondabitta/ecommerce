import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Price = styled.p`
  padding: 2px;
  position: absolute;
  top: 66%;
  left: 2%;
  background-color: white;
  font-size: 17px;
  padding: 3px 7px;
  padding-bottom: 9px;
  font-weight: 400;
  transition: all 0.5s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 250px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    ${Price} {
      transform: translateY(-15px) translateX(5px);
    }
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-radius: 5px;
  object-position: bottom;
  object-fit: cover;
`;

export const Title = styled(Container)`
  gap: 15px;
  padding: 0px 10px 10px 10px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
`;
export const P = styled.p`
  color: grey;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Shop = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  top: 88%;
  right: 0.5%;
  padding: 10px 12px;
  cursor: pointer;
  z-index: 500000;
`;
