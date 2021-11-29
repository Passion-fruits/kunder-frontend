import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & p {
    font-size: 18px;
    color: ${ColorMap.grey000};
    display: flex;
    align-items: center;
    & b {
      color: ${ColorMap.green100};
    }
  }
  & .date {
    color: ${ColorMap.grey300};
    font-size: 15px;
    margin-left: 10px;
  }
  & button {
    background-color: ${ColorMap.mainColor};
    color: ${ColorMap.grey000};
    font-size: 15px;
    font-weight: 500;
    padding: 5px 15px;
    border-radius: 3px;
  }
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  & img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & .profile-intro {
      font-size: 16px;
      color: ${ColorMap.grey300};
      & .name {
        color: ${ColorMap.grey100};
        font-weight: 400;
      }
      & .kdt {
        color: ${ColorMap.green100};
        font-weight: 500;
      }
    }
  }
  & .profile-contents {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.grey000};
  }
  & .un-answer {
    font-size: 17px;
    color: ${ColorMap.grey300};
  }
`;

export const AnswerInput = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${ColorMap.grey900};
  height: 55px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${ColorMap.grey000};
  &::placeholder {
    color: ${ColorMap.grey300};
  }
`;

export const MyAnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & .title {
    font-size: 16px;
    color: ${ColorMap.grey300};
  }
  & .answer {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.grey000};
  }
`;
