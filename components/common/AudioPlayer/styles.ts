import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1400px;
  height: 110px;
  display: flex;
  align-items: center;
  background-color: black;
  position: relative;
  & .music-information {
    z-index: 2;
  }
`;

export const ControlButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
