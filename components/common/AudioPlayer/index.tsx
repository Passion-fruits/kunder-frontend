import { FC, useCallback, useEffect, useState } from "react";
import MusicInformation from "../MusicInformation";
import AudioPlayerButtonTab from "./AudioPlayerButtonTab";
import * as S from "./styles";

interface Props {}

const AudioPlayer: FC<Props> = () => {
  const [musicProgress, setMusicProgress] = useState<number>(0);

  const controlMusicProgress = useCallback(() => {
    const input: HTMLElement = document.getElementById("MusicTimeControlBar");
    input.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      setMusicProgress(parseInt(target.value));
    });
  }, []);

  useEffect(() => {
    controlMusicProgress();
  }, []);

  return (
    <S.Wrapper>
      <S.MusicTimeControlBar
        type="range"
        id="MusicTimeControlBar"
        progress={musicProgress}
        value={musicProgress}
        readOnly
      />
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
