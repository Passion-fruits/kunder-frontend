import { FC } from "react";
import { PlayIcon } from "../../../../assets";
import PlayButton from "../../PlayButton";
import * as S from "./styles";
import Link from "next/link";
import { music } from "./../../../../lib/interface/music";

interface Props {
  music: music;
}

const MusicCardToMain: FC<Props> = ({ music }) => {
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
      <Link href="/music/1">
        <h1 className="title text-overflow">True story</h1>
      </Link>
      <Link href="/profile/1">
        <h3 className="artist text-overflow">이센스</h3>
      </Link>
    </S.Wrapper>
  );
};

export default MusicCardToMain;
