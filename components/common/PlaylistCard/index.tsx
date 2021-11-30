import { FC } from "react";
import { PlayIcon } from "../../../assets";
import PlayButton from "../PlayButton";
import * as S from "./styles";
import Link from "next/link";

interface Props {}

const PlaylistCard: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.CoverImageWrapper>
        <img src="https://i.pinimg.com/originals/8e/5f/56/8e5f56c0814d7ce2f02359dcef5fc91f.jpg" />
        <PlayButton />
      </S.CoverImageWrapper>
      <Link href="/playlist/1">
        <h1 className="title text-overflow">브루노마스 곡 모음집</h1>
      </Link>
    </S.Wrapper>
  );
};

export default PlaylistCard;
