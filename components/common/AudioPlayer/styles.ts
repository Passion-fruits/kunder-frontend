import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Container = styled.div`
  width: 1400px;
  height: 110px;
  display: flex;
  align-items: center;
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

interface rangeProps {
  progress: number;
}

export const MusicTimeControlBar = styled.input<rangeProps>`
  width: 100%;
  height: 3px;
  cursor: pointer;
  -webkit-appearance: none;
  background: ${(res) =>
    `linear-gradient(to right, ${ColorMap.mainColor} 0%, ${ColorMap.mainColor}
    ${res.progress}%, ${ColorMap.grey900} ${res.progress}%, ${ColorMap.grey900} 100%)`};
  transition: 0.3s;
  &:hover {
    &::-webkit-slider-thumb {
      opacity: 1;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${ColorMap.grey000};
    opacity: 0;
    transition: 0.3s;
  }
`;
