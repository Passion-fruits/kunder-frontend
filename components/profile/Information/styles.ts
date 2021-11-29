import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  & .profile-img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  & .nickname {
    color: ${ColorMap.grey000};
    font-size: 40px;
    font-weight: bold;
  }
  & .button-wrap {
    display: flex;
    gap: 10px;
    margin-left: 20px;
    & button {
      height: 40px;
      padding: 5px 15px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 3px;
      color: ${ColorMap.grey000};
      padding-bottom: 6px;
      &:first-of-type {
        background-color: ${ColorMap.mainColor};
      }
      &:last-of-type {
        background-color: ${ColorMap.grey900};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;

export const CntList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  & li {
    list-style: none;
    font-size: 17px;
    padding: 0;
    margin: 0;
    color: ${ColorMap.grey300};
    & b {
      color: ${ColorMap.grey000};
    }
  }
`;

export const SNSWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-top: 30px;
  & button {
    padding: 0;
  }
`;

export const Description = styled.p`
  margin-top: 30px;
  color: ${ColorMap.grey000};
  font-size: 18px;
`;
