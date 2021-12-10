import { FC, MouseEvent } from "react";
import { PlayIcon } from "../../../assets";
import { setContextValue } from "../../../lib/context";
import { Music } from "../../../lib/interface/music";
import * as S from "./styles";

interface Props {
  music?: Music;
  type: "playlist" | "music";
}

const PlayButton: FC<Props> = ({ music, type }) => {
  const dispatch = setContextValue();
  const playMusic = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch({
      type: "SET_MUSIC",
      music: music,
    });
  };
  return (
    <S.Button onClick={type === "music" ? playMusic : undefined}>
      <PlayIcon size={17} />
    </S.Button>
  );
};

export default PlayButton;
