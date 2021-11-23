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
  margin-bottom: 50px;
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

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ShowMusicWrapper = styled.div<{ index }>`
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  gap: 40px;
  transform: ${({ index }) => `translateX(-${230 * index + 40 * index}px)`};
  transition: 0.5s;
`;

export const CardWrap = styled.div<{ currentShow: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  opacity: ${(res) => (res.currentShow ? 1 : 0.5)};
  width: ${(res) => (res.currentShow ? "280px" : "230px")};
  & button {
    opacity: ${(res) => (res.currentShow ? 1 : 0)};
  }
  & .music-title {
    font-size: ${(res) => (res.currentShow ? "20px" : "18px")};
    margin-top: 10px;
    color: ${ColorMap.grey000};
    text-align: center;
  }
  & .artist {
    font-size: ${(res) => (res.currentShow ? "16px" : "14px")};
    font-weight: 400;
    color: ${ColorMap.grey300};
    margin-top: 2px;
    text-align: center;
  }
`;

export const CoverWrap = styled.div<{ currentShow: boolean }>`
  transition: 0.5s;
  width: ${(res) => (res.currentShow ? "280px" : "230px")};
  height: ${(res) => (res.currentShow ? "280px" : "230px")};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
  & button {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid ${ColorMap.grey000};
    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    & svg {
      margin-left: 8px;
      margin-top: 2px;
    }
    &:hover {
      width: 70px;
      height: 70px;
    }
  }
`;
