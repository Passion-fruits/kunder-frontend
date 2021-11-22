import { FC } from "react";
import { AddPlaylistIcon, HeartIcon, PlayIcon } from "../../assets";
import * as S from "./styles";
import { ColorMap } from "../../styles/color";

interface Props {}

const MusicDetail: FC<Props> = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.AlbumImageBox>
            <S.AlbumImage src={"https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"}/>
          </S.AlbumImageBox>
          <S.DescriptionBox>
            <S.TitleBox>
              <S.Line />
              <S.SongTitle>D (half moon)</S.SongTitle>
              <S.ArtistName>Dean</S.ArtistName>
            </S.TitleBox>
            <S.SubInformationBox>
              <S.ViewTag>
                <PlayIcon size={11} />
                <S.Views>612</S.Views>
              </S.ViewTag>
              <S.Tags>힙합</S.Tags>
              <S.Tags>아침에</S.Tags>
              <S.Donations>100KDT 후원</S.Donations>
              <S.LastTime>3일전</S.LastTime>
            </S.SubInformationBox>
            <S.ArtistTalkBox>
              <S.ArtistTalk>아티스트의 말</S.ArtistTalk>
              <S.TalkContent>안녕하십니까, 이번에 ㅈ되게 뽑아본 노래인데 어떠신지요 재밌게 들어보세요</S.TalkContent>
            </S.ArtistTalkBox>
            <S.ButtonBox>
              <S.ButtonTag background={ColorMap.mainColor} gap={"15px"}>
                <PlayIcon size={11}/>
                <S.ButtonText>음악 듣기</S.ButtonText>
              </S.ButtonTag>
              <S.ButtonTag background={ColorMap.grey700} gap={""}>후원하기</S.ButtonTag>
              <S.ButtonTag background={ColorMap.grey700} gap={"6px"}>
                <HeartIcon size={13} />
                <S.ButtonText>0</S.ButtonText>
              </S.ButtonTag>
              <AddPlaylistIcon size={24}/>
              <AddPlaylistIcon size={24}/>
            </S.ButtonBox>
          </S.DescriptionBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default MusicDetail;
