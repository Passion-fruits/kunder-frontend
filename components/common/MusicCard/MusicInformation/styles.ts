import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";

export const MusicInformation = styled.div`
  display: flex;
  align-items: center;
  & .index-num {
    color: ${ColorMap.grey300};
    font-size: 14px;
    font-weight: 400;
    width: 30px;
  }
  & .chart-rank-index {
    width: 40px;
    display: flex;
    align-items: center;
    gap: 5px;
    & span {
      font-size: 14px;
      color: ${ColorMap.mainColor};
    }
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
