import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  & .card-title {
    color: ${ColorMap.grey000};
    font-size: 25px;
    font-weight: bold;
    margin-top: 15px;
  }
  & .card-artist {
    font-size: 16px;
    font-weight: 400;
    color: ${ColorMap.grey200};
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  width: 430px;
  position: relative;
  transition: 500ms;
  & .lit-cover-img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    z-index: 2;
  }
`;

const LPAnime = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform:rotate(360deg);
}
`;

export const LPWrapper = styled.div`
  width: 260px;
  height: 260px;
  background-image: url("/lp.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  animation: ${LPAnime} 5000ms infinite linear;
  & img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 10px;
  & button {
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${ColorMap.grey000};
    font-size: 16px;
    & svg {
      transform: translateY(2px);
    }
  }
`;

export const TagWrap = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  transition: 500ms;
  & div {
    padding: 10px 15px;
    background-color: ${ColorMap.grey900};
    color: ${ColorMap.grey300};
    font-size: 15px;
    border-radius: 24px;
  }
`;