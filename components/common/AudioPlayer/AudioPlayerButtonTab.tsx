import { FC } from "react";
import { AddPlaylistIcon, HeartIcon, PlayIcon } from "../../../assets";
import MusicMoveIcon from "../../../assets/MusicMove";
import * as S from "./styles";

interface Props {}

const AudioPlayerButtonTab: FC<Props> = () => {
  return (
    <S.ControlButtonWrapper>
      <button>
        <AddPlaylistIcon size={16} />
      </button>
      <button>
        <MusicMoveIcon isNext={false} size={18} />
      </button>
      <button>
        <PlayIcon size={20} />
      </button>
      <button>
        <MusicMoveIcon isNext={true} size={18} />
      </button>
      <button>
        <HeartIcon size={17} />
      </button>
    </S.ControlButtonWrapper>
  );
};

export default AudioPlayerButtonTab;
