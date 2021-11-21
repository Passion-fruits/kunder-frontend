import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MusicInformation = styled.div`
  display: flex;
  align-items: center;
  & .index-num {
    color: ${ColorMap.grey300};
    font-size: 14px;
    font-weight: 400;
    width: 30px;
  }
  & img {
    width: 45px;
    height: 45px;
    border-radius: 3px;
  }
  & .title-artist-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    & h1 {
      color: ${ColorMap.grey000};
      font-size: 16px;
      font-weight: 500;
    }
    & h3 {
      font-size: 13px;
      font-weight: 400;
      color: ${ColorMap.grey200};
      margin-top: 2px;
    }
  }
`;

export const ControlBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;
