import { FC } from "react";
import * as S from "./styles";
import MusicCardToMain from "../MusicCard/MusicCardToMain";
import MusicCardToChart from "../MusicCard/MusicCardToChart";
import MusicCardToPlaylist from "../MusicCard/MusicCardToPlaylist";
import PlaylistCard from "../PlaylistCard";
import { Music } from "./../../../lib/interface/music";
import { Playlist } from "./../../../lib/interface/playlist";

interface Props {
  data?: Music[] | Playlist[] | any[];
  option:
    | "musicCardToMain"
    | "musicCardToChart"
    | "musicCardToPlaylist"
    | "userProfile"
    | "playlistCard";
}

const CardList: FC<Props> = ({ data = [1, 2, 3, 4, 5, 6], option }: Props) => {
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
        <S.ColumnWrapper>
          {data.map((obj, index) => (
            <MusicCardToPlaylist key={index} music={obj} />
          ))}
        </S.ColumnWrapper>
      )}
      {option === "musicCardToChart" && (
        <S.ColumnWrapper>
          {[1, 2, 3, 4, 5].map((e, index) => (
            <MusicCardToChart key={index} />
          ))}
        </S.ColumnWrapper>
      )}
    </>
  );
};

export default CardList;
