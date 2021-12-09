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
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
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
  & img {
    width: 140px;
    height: 140px;
    border-radius: 0px;
  }
  & .color-line {
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;
