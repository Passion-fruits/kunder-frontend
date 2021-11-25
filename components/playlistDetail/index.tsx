import { FC } from "react";
import { PlayIcon } from "../../assets";
import CardList from "../common/OptionCardList";
import * as S from "./styles";

interface Props {}

const PlaylistDetail: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.PlaylistInformation>
        <S.CoverImageWrapper>
          <img src="https://post-phinf.pstatic.net/MjAxODExMDVfMjU3/MDAxNTQxNDE2MzM2NjI3.rkS4S4fCTQsaLHMqkq2GekFty7EfkLKws-fqapmfPsAg.Mkhz5iRNWxLSC4dl-lZdoQHRVU6-Opiya6bUYhBvgQIg.JPEG/71DQrKpImPL._SL1400_.jpg?type=w1200" />
        </S.CoverImageWrapper>
        <h1 className="playlist-title text-overflow">힙합 모음집</h1>
        <h3 className="playlist-maker">By 김팔복</h3>
        <p className="playlist-like">이 플레이리스트를 12명이 좋아합니다.</p>
        <S.ButtonWrap>
          <button>
            <PlayIcon size={15} /> 전체 재생하기
          </button>
          <button>좋아요 표시하기</button>
        </S.ButtonWrap>
      </S.PlaylistInformation>
      <S.PlaylistMusicWrapper>
        <div className="flex-wrap">
          <CardList option="musicCardToPlaylist" />
        </div>
      </S.PlaylistMusicWrapper>
    </S.Wrapper>
  );
};

export default PlaylistDetail;
