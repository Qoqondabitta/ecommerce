import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Main = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  width: 500%;
  position: relative;
  /* background-color: blue; */
  left: 0;
`;

export const ImgContainer = styled.div`
  background-image: url(${({ bg }) => bg});
  width: 20%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${({ pos }) => pos};
`;

export const Image = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;
  object-position: ${({ pos }) => pos};
`;
export const Info = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  width: 20%;
  text-align: center;
`;

export const Text = styled.div`
  width: 500px;
  /* background-color: red; */
  position: relative;
  left: 0;
`;

export const TextWrapper = styled.div`
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 50%;
  right: 50%;
  z-index: 20000000000000000;
`;
