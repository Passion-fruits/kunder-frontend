import { FC } from "react";
import { AddPlaylistIcon, PlayIcon, HeartIcon } from "../../../../assets";
import * as S from "./styles";

interface Props {}

const MusicCardToPlaylist: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.MusicInformation>
        <span className="index-num">1</span>
        <img src="https://anthoncode.com/wp-content/uploads/2020/06/poster-havana-psd-camila-cabello.jpg" />
        <div className="title-artist-wrap">
          <h1>좋았던 기억만 그리운 마음만</h1>
          <h3>김팔복</h3>
        </div>
      </S.MusicInformation>
      <S.ControlBtnWrap>
        <button>
          <PlayIcon size={18} />
        </button>
        <button>
          <AddPlaylistIcon size={18} />
        </button>
        <button>
          <HeartIcon size={18} />
        </button>
      </S.ControlBtnWrap>
    </S.Wrapper>
  );
};

export default MusicCardToPlaylist;
