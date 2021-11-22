import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
`;

export const AlbumImageBox = styled.div``;

export const AlbumImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const Description = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
`;

export const Line = styled.div`
  width: 80px;
  height: 3px;
  background-color: ${ColorMap.mainColor};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${ColorMap.grey000};
`;

export const ArtistName = styled.div`
  color: ${ColorMap.grey300};
`;

export const SubInformationBox = styled.div`
  height: 35px;
  display: flex;
  font-size: 16px;
  gap: 10px;
`;

export const ViewTag = styled.div`
  width: 75px;
  height: 100%;
  background-color: ${ColorMap.grey900};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
`;

export const Views = styled.div`
  color: ${ColorMap.grey000};
  display: flex;
  margin-bottom: 2px;
`;

export const Tags = styled.div`
  height: 100%;
  color: ${ColorMap.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ColorMap.grey200};
  border-radius: 3px;
  padding: 0 14px;
`;

export const Donations = styled.div`
  color: ${ColorMap.green100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LastTime = styled.div`
  color: ${ColorMap.grey300};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArtistTalkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ArtistTalk = styled.div`
  color: ${ColorMap.grey400};
`;

export const TalkContent = styled.div`
  color: ${ColorMap.grey100};
  font-size: 18px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ButtonTag = styled.button<{ background: string; gap: string }>`
  cursor: pointer;
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  padding: 0 24px;
  border-radius: 3px;
  height: 40px;
  font-size: 17px;
`;

export const ButtonText = styled.div`
  color: ${ColorMap.grey000};
  margin-bottom: 3px;
`;

export const WriteComment = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 0 20px;
  font-size: 16px;
  background-color: ${ColorMap.grey800};
  height: 60px;
  margin-top: 25px;
  cursor: text;
`;

export const IconBox = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 25px;
`;
