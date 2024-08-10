import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid rgb(223, 218, 218);
  gap: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 300px;
    height: 200px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  width: 250px;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: ${({ width }) => (width ? "100%" : "175px")};
    height: ${({ width }) => (width ? "264px" : "200px")};
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  gap: 10px;
`;

export const Size = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

export const Productimage = styled.img`
  height: 200px;
  width: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  border-right: 1px solid rgb(223, 218, 218);

  @media only screen and (max-width: 600px) {
    width: 175px;
    height: 200px;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  width: ${({ buy }) => (buy ? "100%" : "35px")};
  padding: ${({ buy }) => (buy ? "0px" : "10px")};
  height: ${({ buy }) => (buy ? "35px" : "30px")};
  text-align: center;
`;

export const Texts = styled.p`
  font-size: 16px;
  width: ${({ width }) => width && "50%"};
  color: black;
  font-weight: ${({ main }) => main && "600"};
`;

export const Input = styled.input`
  border: 1px solid black;
  outline: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
`;
