import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  & .title {
    color: ${ColorMap.grey000};
    font-size: 17px;
    font-weight: 400;
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      opacity: 0.8;
    }
  }
  & .artist {
    font-size: 15px;
    font-weight: 400;
    color: ${ColorMap.grey300};
    margin-top: 3px;
    text-align: center;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MusicCoverWrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MusicInformation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  padding: 10px;
  display: flex;
  & .show-cnt {
    border-radius: 3px;
    color: ${ColorMap.grey000};
    font-size: 11px;
    font-weight: 400;
    padding: 0px 7px;
    background-color: rgb(0, 0, 0, 0.5);
    height: 20px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
