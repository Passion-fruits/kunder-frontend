import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const PlaylistInformation = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  position: fixed;
  & .playlist-title {
    margin-top: 10px;
    font-size: 35px;
    font-weight: bold;
    color: ${ColorMap.grey000};
  }
  & .playlist-maker {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.blue100};
    margin-top: 5px;
  }
  & .playlist-like {
    margin-top: 10px;
    font-size: 17px;
    color: ${ColorMap.grey200};
  }
`;

export const CoverImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
  & .line {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    opacity: 0.8;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  & button {
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 3px;
    width: 240px;
    height: 40px;
    border-radius: 3px;
    &:first-of-type {
      color: ${ColorMap.grey000};
      background-color: ${ColorMap.mainColor};
    }
    &:last-of-type {
      color: ${ColorMap.grey800};
      background-color: ${ColorMap.grey000};
    }
    & svg {
      transform: translateY(1px);
      margin-right: 5px;
    }
  }
`;

export const PlaylistMusicWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 130px;
  & .flex-wrap {
    width: 830px;
  }
`;
