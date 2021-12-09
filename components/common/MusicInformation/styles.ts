import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

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
  & .title-artist-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    & h1 {
      color: ${ColorMap.grey000};
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      width: 300px;
    }
    & h3 {
      font-size: 13px;
      font-weight: 400;
      color: ${ColorMap.grey200};
      margin-top: 2px;
      cursor: pointer;
    }
  }
`;

export const CoverWrap = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  cursor: pointer;
  & img,
  .none-cover {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  & .none-cover {
    background-color: ${ColorMap.grey600};
  }
  & .play-cover {
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    position: absolute;
    transition: 0.3s;
    & svg {
      margin: 12px 10px;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
