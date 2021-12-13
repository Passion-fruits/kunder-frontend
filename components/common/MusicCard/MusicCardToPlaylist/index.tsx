import { FC, useState } from "react";
import { AddPlaylistIcon, PlayIcon, HeartIcon } from "../../../../assets";
import MusicInformation from "../../MusicInformation";
import * as S from "./styles";
import { Music } from "./../../../../lib/interface/music";
import like from "../../../../lib/api/like";
import { setContextValue } from "../../../../lib/context";

interface Props {
  music: Music;
  index: number;
}

const MusicCardToPlaylist: FC<Props> = ({ music, index }) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = setContextValue();

  const musicLike = () => {
    setIsLike(true);
    like.musicLike(music.song_id).catch(() => {
      return;
    });
  };

  const addPlaylist = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "playlist",
    });
    dispatch({
      type: "SET_SONG_ID",
      song_id: music.song_id,
    });
  };
  return (
    <S.Wrapper>
      <MusicInformation type="playlist" music={music} index={index} />
      <S.HeartWrap>
        <div># {music.genre}</div>
        <div># {music.mood}</div>
        <div>
          <HeartIcon size={12} />
          {music.like}
        </div>
      </S.HeartWrap>
      <S.ControlBtnWrap>
        <button onClick={addPlaylist}>
          <AddPlaylistIcon size={16} />
        </button>
        <button onClick={musicLike}>
          <HeartIcon size={17} full={isLike} />
        </button>
      </S.ControlBtnWrap>
    </S.Wrapper>
  );
};

export default MusicCardToPlaylist;
