import styled from "styled-components";

export const Container = styled.div`
  height: 423px;
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${({ bgimg }) => bgimg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;
