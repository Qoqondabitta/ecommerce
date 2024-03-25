import { styled } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 300vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  `;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: none;
  background: grey;
  position: absolute;
  top: 40%;
  left: ${({ left }) => (left ? "2%" : "95%")};
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled(Left)``;

export const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Add = styled.h1`

`