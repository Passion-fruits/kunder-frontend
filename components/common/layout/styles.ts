import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 1400px;
  padding-top: 100px;
  padding-bottom: 140px;
  z-index: 2;
`;

export const BackgroundWrap = styled.div`
  width: 100%;
  height: 650px;
  background-image: url("background.jpg");
  position: absolute;
`;

export const Cover = styled.div`
  background: linear-gradient(rgb(0, 0, 0, 0.7), rgb(0, 0, 0));
  width: 100%;
  height: 100%;
`;

export const ColorBackground = styled.div<{ background }>`
  width: 100%;
  height: 500px;
  background: ${(res) => `linear-gradient(black,${res.background},black)`};
  opacity: 0.3;
  position: absolute;
`;
