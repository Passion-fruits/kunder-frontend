import { FC, useEffect, useState } from "react";
import { AddPlaylistIcon, HeartIcon, PlayIcon } from "../../../assets";
import MusicMoveIcon from "../../../assets/MusicMove";
import * as S from "./styles";
import Pause from "./../../../assets/Pause";
import { setContextValue } from "../../../lib/context";
import { Music } from "../../../lib/interface/music";
import like from "../../../lib/api/like";

interface Props {
  isPlay: boolean;
  controlMusic(): void;
  music: Music;
}

const AudioPlayerButtonTab: FC<Props> = (res) => {
  const dispatch = setContextValue();
  const [isLike, setIsLike] = useState(false);

  const addPlaylist = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "playlist",
    });
    dispatch({
      type: "SET_SONG_ID",
      song_id: res.music.song_id,
    });
  };

  const requestLike = () => {
    setIsLike(true);
    like
      .musicLike(res.music.song_id)
      .then(() => {})
      .catch(() => {
        return;
      });
  };

  return (
    <S.ControlButtonWrapper>
      <button onClick={addPlaylist}>
        <AddPlaylistIcon size={16} />
      </button>
      <button>
        <MusicMoveIcon isNext={false} size={18} />
      </button>
      <button onClick={res.controlMusic} className="center">
        {res.isPlay ? <Pause size={20} /> : <PlayIcon size={20} />}
      </button>
      <button>
        <MusicMoveIcon isNext={true} size={18} />
      </button>
      <button onClick={requestLike}>
        <HeartIcon size={17} full={isLike} />
      </button>
    </S.ControlButtonWrapper>
  );
};

export default AudioPlayerButtonTab;
