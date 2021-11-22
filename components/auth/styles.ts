import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .line {
    width: 90px;
    height: 3px;
    background-color: ${ColorMap.mainColor};
  }
  & .introduce {
    font-size: 40px;
    font-weight: bold;
    color: ${ColorMap.grey000};
    margin-top: 5px;
    line-height: 60px;
  }
  & .description {
    font-size: 20px;
    font-weight: 400;
    color: ${ColorMap.grey200};
    margin-top: 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 100px;
  & button {
    width: 240px;
    height: 40px;
    font-size: 17px;
    color: ${ColorMap.grey000};
    border-radius: 3px;
    padding-bottom: 5px;
    &:first-of-type {
      background-color: ${ColorMap.mainColor};
      font-weight: bold;
    }
    &:last-of-type {
      border: 1px solid ${ColorMap.grey000};
      font-weight: 400;
    }
  }
`;
