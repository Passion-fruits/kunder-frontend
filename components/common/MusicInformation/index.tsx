import { FC } from "react";
import * as S from "./styles";
import { ChartArrowIcon, PlayIcon } from "../../../assets";
import Link from "next/link";
import { MusicInformation } from "./../../../lib/interface/music";

interface Props {
  type: "playlist" | "chart" | "audioPlayer";
  music: MusicInformation;
}

const MusicInformation: FC<Props> = ({
  type,
  music = {
    cover_url:
      "https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg",
    title: "제목",
    artist: "아티스트",
  },
}) => {
  return (
    <S.MusicInformation>
      {type === "playlist" ? (
        <span className="index-num">1</span>
      ) : type === "chart" ? (
        <div className="chart-rank-index">
          <span>1</span>
          <ChartArrowIcon size={8} color="red" />
        </div>
      ) : (
        <></>
      )}
      <S.CoverWrap>
        <button className="play-cover">
          <PlayIcon size={18} />
        </button>
        <img src={music.cover_url} />
      </S.CoverWrap>
      <div className="title-artist-wrap">
        <Link href="/music/1">
          <h1>{music.title}</h1>
        </Link>
        <Link href="/profile/1">
          <h3>{music.artist}</h3>
        </Link>
      </div>
    </S.MusicInformation>
  );
};

export default MusicInformation;
