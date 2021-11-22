import { FC } from "react";
import CardList from "../../common/OptionCardList";
import * as S from "./styles";

interface Props {}

const ChartTab: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="chart-title">지금 인기있는 음악</h1>
        <CardList option="musicCardToChart" />
      </S.Container>
      <S.Container>
        <h1 className="chart-title">오늘 가장 많은 후원을 받은 음악</h1>
        <CardList option="musicCardToChart" />
      </S.Container>
      <S.Container>
        <h1 className="chart-title">전체 인기음악</h1>
        <CardList option="musicCardToChart" />
      </S.Container>
    </S.Wrapper>
  );
};

export default ChartTab;
