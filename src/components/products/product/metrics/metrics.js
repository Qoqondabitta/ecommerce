import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  width: 300px;
  border-radius: 3px;
  height: 120px;
  gap: 10px;
  border: 1px solid grey;
  position: absolute;
  top: 78%;
  left: 50%;
  padding: 10px;
  z-index: 100;
  background-color: white;
`;

export const MetricsWrapper = styled.div`
  width: fit-content;
  padding: 0px 5px;
  height: 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  text-transform: uppercase;
  &:hover {
    border: 1px solid black;
  }
`;

export const MetricsImg = styled.img`
  background-color: red;
  width: 175px;
  height: 175px;
  object-fit: cover;
  object-position: center;
`;

export const BottomBox = styled.div`
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const MetricSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({size})=>size?"15px":"5px"};
  width: 220px;
  overflow-x: scroll;
`;

export const PreWrapper = styled.div`
  width: 200px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid black;
  /* border: "none"; */
`;
