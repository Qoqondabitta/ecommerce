import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 423px;
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: white;
  background-image: url(${({ bgimg }) => bgimg});
  background-position: ${({place})=>place?place: "top"};
  background-repeat: no-repeat;
  border: 1px solid rgb(223, 218, 218);
  z-index: 0;
  /* background-size: cover; */
  &:hover {
    background-image: url(${({ alternative }) => alternative});
    background-position: ${({ position }) => position};
    height: 523px;
  }
`;

export const Data = styled.div`
  background-color: white;
  width: 100%;
  /* position: absolute; */
  /* bottom: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-block: 10px;
  height: 100px;
  display: none;
  z-index: 10000000000000000;

  ${Container}:hover & {
    display: flex;
    /* position: relative; */
    /* bottom: -100px; */
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: ${({ underline }) => underline && "underline"};
  font-style: "DM Serif Display", serif;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
`;

export const Image = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: center;
`;
