import { FC } from "react";
import MusicInformation from "../MusicInformation";
import * as S from "./styles";

interface Props {}

const MusicCardtToChart: FC<Props> = () => {
  return (
    <S.Wrapper>
      <MusicInformation type="chart" />
    </S.Wrapper>
  );
};

export default MusicCardtToChart;
