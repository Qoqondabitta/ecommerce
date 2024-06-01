import { styled } from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  gap: 17px;
`;

export const Container = styled.div`
  height: 100%;
width: 50%;
  position: relative;
  box-sizing: border-box;

`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 50vw;
  z-index: -3999;
  transform: translateX(0vw);
`;

export const ArrowWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: 2px solid white;
   background: transparent;
  position: absolute;
  top: 50%;
  left: ${({ left }) => (left ? "2%" : "95%")};
  z-index: 3000000000000;
`;

export const Left = styled.div`
  height: 100vh;
  flex: 1;
  background-color: rgb(190, 184, 184);
  position: relative;
`;
export const Right = styled(Left)``;

export const Mini = styled.div`
  height: 100px;
  width: 80px;
`;

export const Image = styled.img`
  position: ${({ positions }) => (positions ? positions : "absolute")};
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
  transform: scaleX(17deg);
  transition: all 1s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Cards = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${({ s }) => s});
  background-position: ${({ p }) => p};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Add = styled.h1`
  z-index: ${({ z }) => z};
  color: #fff;
`;

export const Blurs = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(116, 115, 115, 0.150);
`;

export const Scripts = styled.div`

`