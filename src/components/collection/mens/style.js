import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  position: relative;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  padding-bottom: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  /* margin: 5px; */
  gap: 0px;
`;

export const Box = styled(Wrapper)`
  /* border: 1px solid rgb(223, 218, 218); */
`;
export const Collection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0px;
  flex-wrap: wrap;
  width: 100%;
`;

export const TwoHalf = styled.div`
  display: flex;
  width: 100%;
  gap: 0px;
`;

export const Left = styled(TwoHalf)`
  width: 50%;
`;

export const Right = styled.div`
  width: 50%;
  background-image: url(${({ backimg }) => backimg});
`;
