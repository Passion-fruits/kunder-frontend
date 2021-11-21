import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 1400px;
  padding-top: 100px;
  padding-bottom: 120px;
  z-index: 2;
`;

export const BackgroundWrap = styled.div`
  width: 100%;
  height: 650px;
  background-image: url("background.jpg");
  position: absolute;
`;

export const Cover = styled.div`
  background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0));
  width: 100%;
  height: 100%;
`;
