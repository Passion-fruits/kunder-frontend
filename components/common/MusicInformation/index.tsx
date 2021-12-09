import { FC } from "react";
import * as S from "./styles";
import { ChartArrowIcon, PlayIcon } from "../../../assets";
import Link from "next/link";
import { MusicInformation } from "./../../../lib/interface/music";
import LoadImage from "../LoadImage";

interface Props {
  type: "playlist" | "chart" | "audioPlayer";
  music: MusicInformation;
}

const MusicInformation: FC<Props> = ({
  type,
  music = {
    cover_url:
      "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover?fimg-ssr-default",
    title: "Lose Yourself by Eminem | Eminem",
    artist: "블랙넛",
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
        <LoadImage src={music.cover_url} border_radius="basic" />
      </S.CoverWrap>
      <div className="title-artist-wrap">
        <Link href="/music/15">
          <h1 className="text-overflow">{music.title}</h1>
        </Link>
        <Link href="/profile/3">
          <h3>{music.artist}</h3>
        </Link>
      </div>
    </S.MusicInformation>
  );
};

export default MusicInformation;
