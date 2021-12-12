import { FC } from "react";
import * as S from "./styles";
import MusicCardToMain from "../MusicCard/MusicCardToMain";
import MusicCardToChart from "../MusicCard/MusicCardToChart";
import MusicCardToPlaylist from "../MusicCard/MusicCardToPlaylist";
import PlaylistCard from "../PlaylistCard";
import { Music } from "./../../../lib/interface/music";
import { Playlist } from "./../../../lib/interface/playlist";
import ProfileCard from "../ProfileCard";

interface Props {
  data: Music[] | Playlist[];
  option:
    | "musicCardToMain"
    | "musicCardToChart"
    | "musicCardToPlaylist"
    | "userProfile"
    | "playlistCard"
    | "profileCard";
}

const CardList: FC<Props> = ({ data, option }: Props) => {
  return (
    <>
      {option === "musicCardToMain" && (
        <S.RowWrapper>
          {data.map((obj, index) => (
            <MusicCardToMain key={index} music={obj} />
          ))}
        </S.RowWrapper>
      )}
      {option === "playlistCard" && (
        <S.RowWrapper>
          {data.map((obj, index) => (
            <PlaylistCard key={index} playlist={obj} />
          ))}
        </S.RowWrapper>
      )}
      {option === "musicCardToPlaylist" && (
        <S.ColumnWrapper gap={25}>
          {data.map((obj, index) => (
            <MusicCardToPlaylist key={index} music={obj} index={index} />
          ))}
        </S.ColumnWrapper>
      )}
      {option === "musicCardToChart" && (
        <S.ColumnWrapper gap={35}>
          {[1, 2, 3, 4, 5].map((e, index) => (
            <MusicCardToChart key={index} />
          ))}
        </S.ColumnWrapper>
      )}
      {option === "profileCard" && (
        <S.RowWrapper>
          <ProfileCard />
        </S.RowWrapper>
      )}
    </>
  );
};

export default CardList;
