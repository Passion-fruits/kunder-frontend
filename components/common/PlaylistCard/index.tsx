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
      {playlist && (
        <>
          <S.CoverImageWrapper>
            <Link href={`/playlist/${playlist.playlist_id}`}>
              <div
                className="color-line"
                style={{ border: `30px solid #${playlist.color_hex}` }}
              />
            </Link>
            <LoadImage src={playlist.cover_url} border_radius="basic" />
            <PlayButton type="playlist" />
          </S.CoverImageWrapper>
          <Link href={`/playlist/${playlist.playlist_id}`}>
            <h1 className="title text-overflow">{playlist.name}</h1>
          </Link>
          <div className="author text-overflow">
            플레이리스트
            <div className="circle" />
            {playlist.author}
          </div>
        </>
      )}
    </S.Wrapper>
  );
};

export default PlaylistCard;
