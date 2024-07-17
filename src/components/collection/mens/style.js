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

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 230px;
    padding: 0px 30px;
    gap: 5px;
    text-align: center;
    padding-bottom: 10px;
  }

  @media only screen and (max-width: 420px) {
    height: 202px;
  }

  @media only screen and (max-width: 350px) {
    height: 172px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  gap: 0px;

  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export const Box = styled(Wrapper)`
  padding: 5px;
  gap: 20px;
  align-items: flex-end;
  position: relative;
  height: ${({ length }) => length};
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export const Collection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 0px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border: 1px solid rgb(223, 218, 218);
  width: 250px;
  height: 250px;
  overflow-y: scroll;
  position: absolute;
  top: 57px;
  right: 0px;
  z-index: 20000;

  &::-webkit-scrollbar {
    width: 10px;
  }

  @media only screen and (max-width: 600px) {
    top: 52px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0px;
  padding: 0px 20px 0px 0px;

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Category = styled.div`
  margin-top: 10px;
  font-style: "DM Serif Display", serif;
  width: 120px;
  cursor: pointer;
  gap: 5px;
  font-weight: 600;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  padding-bottom: 3px;
`;

export const Items = styled.div`
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid rgb(223, 218, 218);
  width: 100%;
  font-style: "DM Serif Display", serif;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 218, 218);
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  font-style: "DM Serif Display", serif;
  width: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  width: 200px;
  height: 50px;
  margin-block: 30px;

  @media only screen and (max-width) {
    width: 110px;
  }
`;
