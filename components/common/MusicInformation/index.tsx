import { FC } from "react";
import * as S from "./styles";
import { ChartArrowIcon } from "../../../assets";

interface Props {
  type: "playlist" | "chart" | "audioPlayer";
}

const MusicInformation: FC<Props> = ({ type }) => {
  return (
    <S.MusicInformation>
      {type === "playlist" ? (
        <span className="index-num">1</span>
      ) : type === "chart" ? (
        <div className="chart-rank-index">
          <span>1</span>
          <ChartArrowIcon size={8} color="red" />
        </div>
      ) : (
        <></>
      )}
      <img src="https://anthoncode.com/wp-content/uploads/2020/06/poster-havana-psd-camila-cabello.jpg" />
      <div className="title-artist-wrap">
        <h1>좋았던 기억만 그리운 마음만</h1>
        <h3>김팔복</h3>
      </div>
    </S.MusicInformation>
  );
};

export default MusicInformation;
