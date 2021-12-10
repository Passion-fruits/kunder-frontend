import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const PageDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & h1 {
    font-size: 25px;
    color: ${ColorMap.grey000};
  }
  & span {
    font-size: 17px;
    color: ${ColorMap.grey200};
    & b {
      font-weight: 500;
      color: ${ColorMap.mainColor};
    }
  }
`;

export const ShaddowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 1000px;
    height: 100%;
    opacity: 0.5;
  }
`;

export const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  gap: 80px;
`;
