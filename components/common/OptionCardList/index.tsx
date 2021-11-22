import { FC } from "react";
import * as S from "./styles";
import MusicCardToMain from "../MusicCard/MusicCardToMain";
import MusicCardToChart from "../MusicCard/MusicCardToChart";
import MusicCardToPlaylist from "../MusicCard/MusicCardToPlaylist";
import PlaylistCard from "../PlaylistCard";

interface Props {
  data?: any[];
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
          {data.map((e, index) => (
            <MusicCardToMain key={index} />
          ))}
        </S.RowWrapper>
      )}
      {option === "playlistCard" && (
        <S.RowWrapper>
          {data.map((e, index) => (
            <PlaylistCard key={index} />
          ))}
        </S.RowWrapper>
      )}
      {option === "musicCardToPlaylist" && (
        <S.ColumnWrapper>
          {data.map((e, index) => (
            <MusicCardToPlaylist key={index} />
          ))}
        </S.ColumnWrapper>
      )}
      {option === "musicCardToChart" && (
        <S.ColumnWrapper>
          {data.map((e, index) => (
            <MusicCardToChart key={index} />
          ))}
        </S.ColumnWrapper>
      )}
    </>
  );
};

export default CardList;
