import { FC } from "react";
import { AddPlaylistIcon, PlayIcon, HeartIcon } from "../../../../assets";
import MusicInformation from "../../MusicInformation";
import * as S from "./styles";
import { Music } from "./../../../../lib/interface/music";

interface Props {
  music: Music;
}

const MusicCardToPlaylist: FC<Props> = ({ music }) => {
  return (
    <S.Wrapper>
      <MusicInformation type="playlist" music={music} />
      <S.ControlBtnWrap>
        <button>
          <PlayIcon size={18} />
        </button>
        <button>
          <AddPlaylistIcon size={18} />
        </button>
        <button>
          <HeartIcon size={18} />
        </button>
      </S.ControlBtnWrap>
    </S.Wrapper>
  );
};

export default MusicCardToPlaylist;
