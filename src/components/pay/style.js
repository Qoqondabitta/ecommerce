import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 900000000000;
`;

export const Container = styled.div`
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
  gap: 20px;
  position: relative;
  height: 400px;
  padding-top: 50px;
`;

export const Pay = styled.button`
  background-color: black;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

export const AlertBox = styled.div`
  /* display: block; */
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  background-color: ${({ color }) => color};
  color: white;
  padding: 10px 40px;
  border-radius: 5px;
  text-align: center;
  /* width: 300px; */
  /* z-index: 999; */
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
  /* margin-top: 10px; */

  &::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const InputBox = styled.div`
  height: 40px;
  margin-top: 10px;
  position: relative;
`;

export const Instruction = styled.p`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;
