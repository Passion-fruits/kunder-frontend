import { FC, useCallback, useEffect, useRef, useState } from "react";
import { getContextValue } from "../../../lib/context";
import MusicInformation from "../MusicInformation";
import AudioPlayerButtonTab from "./AudioPlayerButtonTab";
import * as S from "./styles";

interface Props {}

const AudioPlayer: FC<Props> = () => {
  const [musicProgress, setMusicProgress] = useState<number>(0);
  const contextObj = getContextValue();
  const music = contextObj.music;
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio());
  const audio = audioRef.current;

  const settingAudioStart = () => {
    audio.src = music.song_url;
    audio.play();
  };

  useEffect(() => {
    if (music) {
      settingAudioStart();
    }
  }, [music]);

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
          <MusicInformation type="audioPlayer" music={music} />
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default AudioPlayer;
