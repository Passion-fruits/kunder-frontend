import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const AlbumImageBox = styled.div`
  & img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  & .line {
    width: 80px;
    height: 3px;
    background-color: ${ColorMap.mainColor};
  }
  & .music-title {
    font-size: 30px;
    font-weight: bold;
    color: ${ColorMap.grey000};
    margin-top: 7px;
  }
  & .artist {
    color: ${ColorMap.grey300};
    font-size: 17px;
    font-weight: 500;
  }
`;

export const SubInformationBox = styled.div`
  height: 35px;
  display: flex;
  gap: 10px;
  font-size: 15px;
  margin-top: 13px;
  & .show-cnt {
    padding: 0 15px;
    height: 100%;
    background-color: ${ColorMap.grey700};
    color: ${ColorMap.grey000};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 3px;
    & svg {
      transform: translateY(1px);
    }
  }
  & .tag {
    height: 100%;
    color: ${ColorMap.grey200};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ColorMap.grey200};
    border-radius: 3px;
    padding: 0 13px;
    padding-bottom: 2px;
  }
  & .donation-cnt {
    color: ${ColorMap.green100};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .last-time {
    color: ${ColorMap.grey300};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ArtistTalkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  & .title {
    color: ${ColorMap.grey400};
    font-size: 16px;
    font-weight: 400;
  }
  & .artist-talk {
    color: ${ColorMap.grey000};
    font-size: 18px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 23px;
  & .base-btn {
    padding: 0 18px;
    height: 40px;
    background-color: ${ColorMap.grey700};
    border-radius: 3px;
    gap: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 3px;
    & svg {
      transform: translateY(1px);
    }
    &:first-of-type {
      background-color: ${ColorMap.mainColor};
    }
    &:last-of-type {
      gap: 6px;
    }
  }
  & .icon-box {
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 10px;
    padding-top: 5px;
  }
`;

export const WriteComment = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 25px;
  background-color: ${ColorMap.grey700};
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: ${ColorMap.grey100};
  &::placeholder {
    color: ${ColorMap.grey300};
  }
`;

export const CommentWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  & .comment-cnt {
    color: ${ColorMap.grey200};
    font-size: 18px;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 25px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  & div {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    & span {
      font-size: 15px;
      color: ${ColorMap.grey100};
      & time {
        color: ${ColorMap.grey300};
        margin-left: 5px;
      }
    }
    & p {
      color: ${ColorMap.grey000};
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;
