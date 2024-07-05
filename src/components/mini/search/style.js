import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  z-index: 1000000000000000000000;
  width: fit-content;
`;

export const SearchDrop = styled.div`
  gap: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 0px 150px 10px;
  position: absolute;
  top: 80px;
  right: 5.5%;
  z-index: 100000000000000;
  width: 710px;
  height: 452px;
  background: white;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    /* flex-wrap: wrap; */
    gap: 15px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const FirstCol = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px 0px 0px;
`;

export const SecondCol = styled.div`
  gap: 60px;
  width: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 25px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Suggestions = styled.div`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000000000000;
padding-left: 20px;

  @media only screen and (max-width: 600px){
padding-left: 0px;
  }
`;

export const DropMedia = styled.div`
  gap: 15px;
  z-index: 1000000000000000000;
  display: none;
  flex-wrap: wrap;
  width: 60%;
  background: white;

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const List = styled.ul`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
`;

export const Item = styled.li`
  gap: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  font-size: ${({ size }) => (size == "main" ? "14px" : "14px")};
  font-weight: ${({ size }) => (size == "main" ? "600" : "400")};
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid black;
  padding-bottom: 1px;
  text-transform: capitalize;
`;

export const MediaText = styled.p`
  background-color: rgb(193, 189, 189);
  padding: 3px 4px;
  font-size: 14px;
  border-radius: 2px;
`;

export const SuggestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const ImageSuggestions = styled.div`
  width: 300%;
  height: 130%;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const SearchImages = styled.img`
  width: 200px;
  height: 150px;
`;

export const SearchMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  background-color: white;
  height: 100vh;
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    position: absolute;
  }
`;
