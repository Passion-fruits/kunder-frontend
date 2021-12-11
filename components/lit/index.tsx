import { FC, useEffect, useState } from "react";
import PageDiscription from "./PageDescription";
import * as S from "./styles";
import BackgroundShaddow from "./BackgroundShaddow";
import Card from "./Card";
import music from "../../lib/api/music";
import { Music } from "../../lib/interface/music";
import { setContextValue } from "../../lib/context";

interface Props {}

const Lit: FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [musicList, setMusicList] = useState<Music[]>([]);
  const dispatch = setContextValue();

  useEffect(() => {
    music.getStream({ size: 10, genre: 3, page: 1, sort: 1 }).then((res) => {
      setMusicList(res.data.songs);
    });
  }, []);

  useEffect(() => {
    if (musicList.length !== 0) {
      dispatch({
        type: "SET_MUSIC",
        music: musicList[currentIndex],
      });
    }
  }, [currentIndex, musicList]);

  return (
    <S.Wrapper>
      <BackgroundShaddow color="pink" />
      <PageDiscription />
      <S.FlexWrap>
        <S.CardListWrapper index={currentIndex}>
          {musicList.map((obj, index) => (
            <Card
              key={index}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              music={obj}
            />
          ))}
        </S.CardListWrapper>
      </S.FlexWrap>
    </S.Wrapper>
  );
};

export default Lit;
