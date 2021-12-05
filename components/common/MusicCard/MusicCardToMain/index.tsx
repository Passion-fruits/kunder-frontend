import { FC } from "react";
import { PlayIcon } from "../../../../assets";
import PlayButton from "../../PlayButton";
import * as S from "./styles";
import Link from "next/link";
import { Music } from "./../../../../lib/interface/music";

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
          <PlayButton />
        </S.MusicInformation>
        <img src={music.cover_url} />
      </S.MusicCoverWrap>
      <Link href="/music/1">
        <h1 className="title text-overflow">{music.title}</h1>
      </Link>
      <Link href="/profile/1">
        <h3 className="artist text-overflow">{music.artist}</h3>
      </Link>
    </S.Wrapper>
  );
};

export default MusicCardToMain;
