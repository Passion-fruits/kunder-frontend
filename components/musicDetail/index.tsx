import { FC } from "react";
import { PlayIcon } from "../../assets";
import * as S from "./styles";
import ButtonBox from "./ButtonBox";
import CardList from "./../common/OptionCardList/index";
import { Music } from "./../../lib/interface/music";
import { getDate } from "./../../lib/utils/getDate";

interface Props {
  music: Music;
}

const MusicDetail: FC<Props> = ({ music }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.AlbumImageBox>
          <img src={music.cover_url} />
        </S.AlbumImageBox>
        <S.Description>
          <S.TitleBox>
            <div className="line" />
            <h1 className="music-title">{music.title}</h1>
            <h3 className="artist">{music.artist}</h3>
          </S.TitleBox>
          <S.SubInformationBox>
            <div className="show-cnt">
              <PlayIcon size={12} />
              612
            </div>
            <div className="tag">#{music.genre}</div>
            <div className="tag">#{music.mood}</div>
            <span className="donation-cnt">100KDT 후원</span>
            <span className="last-time">{getDate(music.created_at)}</span>
          </S.SubInformationBox>
          <S.ArtistTalkBox>
            <h1 className="title">아티스트의 말</h1>
            <p className="artist-talk">{music.description}</p>
          </S.ArtistTalkBox>
          <ButtonBox like={music.like} song_id={music.song_id} />
        </S.Description>
      </S.Container>
      <S.WriteComment
        type="text"
        placeholder="음악에 의견을 남겨주세요! (엔터키를 눌러 등록)"
      />
      <CardList option="musicCardToMain" />
    </S.Wrapper>
  );
};

export default MusicDetail;
