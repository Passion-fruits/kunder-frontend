import { FC } from "react";
import { PlayIcon } from "../../../assets";
import * as S from "./styles";

interface Props {}

const PlayButton: FC<Props> = () => {
  return (
    <S.Button>
      <PlayIcon size={17} />
    </S.Button>
  );
};

export default PlayButton;
