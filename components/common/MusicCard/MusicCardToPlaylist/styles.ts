import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControlBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
`;

export const HeartWrap = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.8;
  & svg {
    transform: translateY(1px);
  }
  & div {
    background-color: ${ColorMap.grey700};
    padding: 6px 15px;
    border-radius: 24px;
    font-size: 14px;
    color: ${ColorMap.grey200};
    gap: 5px;
    display: flex;
    align-items: center;
  }
`;
