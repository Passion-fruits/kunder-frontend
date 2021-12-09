import { FC } from "react";
import PlayButton from "../PlayButton";
import * as S from "./styles";
import Link from "next/link";
import { Playlist } from "./../../../lib/interface/playlist";
import LoadImage from "../LoadImage";

interface Props {
  playlist: Playlist;
}

const PlaylistCard: FC<Props> = ({ playlist }) => {
  return (
    <S.Wrapper>
      <S.CoverImageWrapper>
        <LoadImage src={playlist.cover_url} border_radius="basic" />
        <PlayButton />
      </S.CoverImageWrapper>
      <Link href={`/playlist/${playlist.playlist_id}`}>
        <h1 className="title text-overflow">{playlist.name}</h1>
      </Link>
    </S.Wrapper>
  );
};

export default PlaylistCard;
