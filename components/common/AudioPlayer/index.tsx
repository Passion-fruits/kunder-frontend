import { FC } from "react";
import MusicInformation from "../MusicInformation";
import AudioPlayerButtonTab from "./AudioPlayerButtonTab";
import * as S from "./styles";

interface Props {}

const AudioPlayer: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <AudioPlayerButtonTab />
        <div className="music-information">
          <MusicInformation type="audioPlayer" />
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default AudioPlayer;
