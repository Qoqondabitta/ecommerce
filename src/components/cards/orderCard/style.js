import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid rgb(223, 218, 218);
  position: relative;
  /* z-index: 0; */
  /* padding-block: 10px; */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 300px;
    /* height: 200px; */
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* flex: 1; */
  width: 250px;
  height: 200px;

  @media only screen and (max-width: 600px) {
    align-items: center;
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;
  /* flex: 1; */
  height: 50px;
  gap: 10px;
  padding: 10px;
`;

export const Size = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
`;

export const Productimage = styled.img`
  height: 200px;
  width: 245px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  /* border-right: 1px solid rgb(223, 218, 218); */

  @media only screen and (max-width: 600px) {
    width: 175px;
    height: 200px;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  width: ${({ buy, edit }) => (buy ? "100%" : edit ? "50%" : "35px")};
  padding: ${({ buy }) => (buy ? "0px" : "10px")};
  height: ${({ buy }) => (buy ? "35px" : "30px")};
  text-align: center;
`;

export const Texts = styled.p`
  font-size: 18px;
  text-align: left;
  width: ${({ width }) => width && "50%"};
  color: black;
  font-weight: 600;
  /* font-weight: ${({ main }) => main && "600"}; */
`;

export const Input = styled.input`
  border: 1px solid black;
  outline: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`;
