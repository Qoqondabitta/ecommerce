import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 423px;
  position: relative;
  background-color: white;
  background-image: url(${({ bgimg }) => bgimg});
  background-repeat: no-repeat;
  background-position: bottom;
  border: 1px solid rgb(223, 218, 218);
  /* background-size: cover; */
  &:hover {
    background-image: url(${({ alternative }) => alternative});
  }
`;

export const Data = styled.div`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-block: 10px;
  height: 100px;
  display: none;

  ${Container}:hover & {
    display: flex;
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


// export const Image = styled.img`
// width: 100%;
// height: 100%;
// object-fit: cover;
// object-position: center;
// `