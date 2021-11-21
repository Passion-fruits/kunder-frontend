import { FC } from "react";
import { AddPlaylistIcon, PlayIcon, HeartIcon } from "../../../../assets";
import MusicInformation from "../MusicInformation";
import * as S from "./styles";

interface Props {}

const MusicCardToPlaylist: FC<Props> = () => {
  return (
    <S.Wrapper>
      <MusicInformation type="playlist" />
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
