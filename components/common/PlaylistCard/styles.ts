import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  & .title {
    color: ${ColorMap.grey000};
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 3px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
  & .author {
    color: ${ColorMap.grey300};
    font-size: 14px;
    display: flex;
    gap: 5px;
    width: 100%;
    align-items: center;
    & .circle {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${ColorMap.grey300};
    }
  }
`;

export const CoverImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   &::before,
  ::after {
    content: "";
    position: absolute;
    border-radius: 3px;
  } */
  &::before {
    width: 190px;
    height: 190px;
    transform: translateY(-10px);
    background-color: ${ColorMap.grey500};
    z-index: -1;
  }
  &::after {
    width: 180px;
    height: 180px;
    transform: translateY(-20px);
    background-color: ${ColorMap.grey600};
    z-index: -2;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  & .color-line {
    opacity: 0.9;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: none;
    cursor: pointer;
  }
`;
