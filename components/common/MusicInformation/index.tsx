import { FC } from "react";
import * as S from "./styles";
import { ChartArrowIcon, PlayIcon } from "../../../assets";
import Link from "next/link";
import { Music, MusicInformation } from "./../../../lib/interface/music";
import LoadImage from "../LoadImage";
import { setContextValue } from "../../../lib/context";

interface Props {
  type: "playlist" | "chart" | "audioPlayer";
  music: Music;
  index?: number;
}

const MusicInformation: FC<Props> = ({
  type,
  music = {
    cover_url:
      "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover?fimg-ssr-default",
    title: "Lose Yourself by Eminem | Eminem",
    artist: "블랙넛",
    description: "",
    mood: "",
    genre: "",
    song_id: 1,
    song_url: "",
    created_at: new Date(),
    like: "1",
    comment: "1",
    user_id: 1,
    color_hex: "#fff",
  },
  index,
}) => {
  const dispatch = setContextValue();

  const playMusic = () => {
    dispatch({
      type: "SET_MUSIC",
      music: music,
    });
  };
  return (
    <S.MusicInformation>
      {type === "playlist" ? (
        <span className="index-num">{index + 1}</span>
      ) : type === "chart" ? (
        <div className="chart-rank-index">
          <span>1</span>
          <ChartArrowIcon size={8} color="red" />
        </div>
      ) : (
        <></>
      )}
      <S.CoverWrap onClick={playMusic}>
        <button className="play-cover">
          <PlayIcon size={18} />
        </button>
        {music ? (
          <LoadImage src={music.cover_url} border_radius="basic" />
        ) : (
          <div className="none-cover" />
        )}
      </S.CoverWrap>
      {music ? (
        <div className="title-artist-wrap">
          <Link href={`/music/${music.song_id}`}>
            <h1 className="text-overflow">{music.title}</h1>
          </Link>
          <Link href={`/profile/${music.user_id}`}>
            <h3>{music.artist}</h3>
          </Link>
        </div>
      ) : (
        <div className="title-artist-wrap">
          <h1 className="text-overflow">곡이 없습니다</h1>
          <h3>- - -</h3>
        </div>
      )}
    </S.MusicInformation>
  );
};

export default MusicInformation;
