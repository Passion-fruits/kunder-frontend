import { FC } from "react";
import { PlayIcon } from "../../assets";
import { PlaylistDetailType } from "../../lib/interface/playlist";
import CardList from "../common/OptionCardList";
import * as S from "./styles";

interface Props {
  playlistDetailInfor: PlaylistDetailType;
}

const PlaylistDetail: FC<Props> = ({
  playlistDetailInfor: { playlist, songs },
}) => {
  return (
    <S.Wrapper>
      <S.PlaylistInformation>
        <S.CoverImageWrapper>
          <img src={playlist.cover_url} />
        </S.CoverImageWrapper>
        <h1 className="playlist-title text-overflow">{playlist.name}</h1>
        <h3 className="playlist-maker">{playlist.author}</h3>
        <p className="playlist-like">
          이 플레이리스트를 {playlist.like}명이 좋아합니다.
        </p>
        <S.ButtonWrap>
          <button>
            <PlayIcon size={15} /> 전체 재생하기
          </button>
          <button>좋아요 표시하기</button>
        </S.ButtonWrap>
      </S.PlaylistInformation>
      <S.PlaylistMusicWrapper>
        <div className="flex-wrap">
          <CardList option="musicCardToPlaylist" data={songs} />
        </div>
      </S.PlaylistMusicWrapper>
    </S.Wrapper>
  );
};

export default PlaylistDetail;
