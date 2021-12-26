import { FC, useCallback, useEffect, useRef, useState } from "react";
import { getContextValue } from "../../../lib/context";
import MusicInformation from "../MusicInformation";
import AudioPlayerButtonTab from "./AudioPlayerButtonTab";
import * as S from "./styles";
import { useInterval } from "./../../../lib/utils/useInterval";
import history from "../../../lib/api/history";

interface Props {}

const AudioPlayer: FC<Props> = () => {
  const [musicProgress, setMusicProgress] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const contextObj = getContextValue();
  const music = contextObj.music;
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio());
  const audio = audioRef.current;

  const settingAudioStart = () => {
    audio.src = music.song_url;
    audio.play();
    setIsPlay(true);
  };

  const musicStopOrStart = () => {
    if (isPlay) {
      audio.pause();
      setIsPlay(false);
    } else {
      audio.play();
      setIsPlay(true);
    }
  };

  const setProgress = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    if (!isNaN(progress)) {
      setMusicProgress(progress);
    }
  };

  const controlMusicProgress = useCallback(() => {
    const input: HTMLElement = document.getElementById("MusicTimeControlBar");
    input.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const progress = parseInt(target.value);
      setMusicProgress(progress);
      audio.currentTime = (audio.duration * progress) / 100;
    });
  }, []);

  const setHistory = () => {
    history.setHistory(music.song_id).then(() => {
      return;
    });
  };

  useEffect(() => {
    setMusicProgress(0);
    if (music) {
      settingAudioStart();
      setHistory();
    }
  }, [music]);

  useInterval(setProgress, 1000);

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
        <AudioPlayerButtonTab
          isPlay={isPlay}
          controlMusic={musicStopOrStart}
          music={music}
        />
        <div className="music-information">
          <MusicInformation type="audioPlayer" music={music} />
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default AudioPlayer;
