import { FC } from "react";
import { PlayIcon } from "../../../../assets";
import PlayButton from "../../PlayButton";
import * as S from "./styles";

interface Props {}

const MusicCardToMain: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.MusicCoverWrap>
        <S.MusicInformation>
          <div className="show-cnt">
            <PlayIcon size={7} />
            123
          </div>
          <PlayButton />
        </S.MusicInformation>
        <img src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover?fimg-ssr-default" />
      </S.MusicCoverWrap>
      <h1 className="title text-overflow">True story</h1>
      <h3 className="artist text-overflow">이센스</h3>
    </S.Wrapper>
  );
};

export default MusicCardToMain;
