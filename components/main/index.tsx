import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import ChartTab from "./ChartTab/index";
import CardList from "../common/OptionCardList";
import { Music } from "../../lib/interface/music";
import { Playlist } from "./../../lib/interface/playlist";
import music from "../../lib/api/music";
import playlist from "../../lib/api/playlist";

interface Props {}

const Main: FC<Props> = () => {
  const [popularMusic, setPopularMusic] = useState<Music[]>([]);
  const [popularPlaylist, setPopularPlaylist] = useState<Playlist[]>([]);
  useEffect(() => {
    music
      .getStream({ genre: 1, page: 1, sort: 1, size: 6 })
      .then((res) => {
        setPopularMusic(res.data.songs);
      })
      .catch(() => {
        return;
      });
    playlist
      .getPopularPlaylist({ page: 1, size: 6 })
      .then((res) => {
        setPopularPlaylist(res.data.playlist);
      })
      .catch(() => {
        return;
      });
  }, []);
  return (
    <S.Wrapper>
      {/*       <ChartTab /> */}
      <S.CardListWrap>
        <h1 className="list-title">인기 음악을 만나보세요!</h1>
        <CardList option="musicCardToMain" data={popularMusic} />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">지금 뜨는 플레이리스트</h1>
        <CardList option="playlistCard" data={popularPlaylist} />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">따끈따끈 새로나온 음악</h1>
        <CardList option="musicCardToMain" data={popularMusic} />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">취향저격 플레이리스트</h1>
        <CardList option="playlistCard" data={popularPlaylist} />
      </S.CardListWrap>
    </S.Wrapper>
  );
};

export default Main;
