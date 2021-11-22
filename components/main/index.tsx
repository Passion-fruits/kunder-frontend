import { FC } from "react";
import * as S from "./styles";
import ChartTab from "./ChartTab/index";
import CardList from "../common/OptionCardList";

interface Props {}

const Main: FC<Props> = () => {
  return (
    <S.Wrapper>
      <ChartTab />
      <S.CardListWrap>
        <h1 className="list-title">이런 음악 어떠신가요?</h1>
        <CardList option="musicCardToMain" />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">이런 음악 어떠신가요?</h1>
        <CardList option="playlistCard" />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">이런 음악 어떠신가요?</h1>
        <CardList option="musicCardToMain" />
      </S.CardListWrap>
      <S.CardListWrap>
        <h1 className="list-title">이런 음악 어떠신가요?</h1>
        <CardList option="playlistCard" />
      </S.CardListWrap>
    </S.Wrapper>
  );
};

export default Main;
