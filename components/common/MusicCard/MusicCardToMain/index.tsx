import { FC } from "react";
import { PlayIcon } from "../../../../assets";
import PlayButton from "../../PlayButton";
import * as S from "./styles";
import Link from "next/link";
import { Music } from "./../../../../lib/interface/music";
import LoadImage from "../../LoadImage";

interface Props {
  music: Music;
}

const MusicCardToMain: FC<Props> = ({ music }) => {
  return (
    <S.Wrapper>
      <S.MusicCoverWrap>
        <S.MusicInformation>
          <div className="show-cnt">
            <PlayIcon size={7} />
            123
          </div>
          <PlayButton type="music" music={music} />
        </S.MusicInformation>
        <LoadImage src={music.cover_url} border_radius="basic" />
      </S.MusicCoverWrap>
      <Link href={`/music/${music.song_id}`}>
        <h1 className="title text-overflow">{music.title}</h1>
      </Link>
      <Link href="/profile/3">
        <h3 className="artist text-overflow">{music.artist}</h3>
      </Link>
    </S.Wrapper>
  );
};

export default MusicCardToMain;
