import { styled, keyframes } from "styled-components";

const watcher = keyframes`
to{scale:1 1;}
`;

export const Watcher = styled.div`
  height: 10px;
  position: fixed;
  top: 0px;
  z-index: 6000;
  width: 100%;
  background-color: white;
  scale: 0 1;
  transform-origin: left;
  animation: watcher linear;
  animation-timeline: scroll();
`;
