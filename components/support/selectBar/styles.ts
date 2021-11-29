import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
`;

export const SelectWrap = styled.div`
  display: flex;
  gap: 15px;
  & select {
    width: 140px;
    height: 40px;
    border-radius: 5px;
    background-color: ${ColorMap.grey700};
    color: ${ColorMap.grey300};
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
  }
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;
  & label {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.grey000};
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  & input[type="radio"] {
    display: none;
  }
  & input[type="radio"]:checked + .radio-icon > .circle {
    visibility: visible;
  }
  & .radio-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid ${ColorMap.grey000};
    padding: 4px;
    & .circle {
      background-color: ${ColorMap.green100};
      border-radius: 50%;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }
  }
`;
