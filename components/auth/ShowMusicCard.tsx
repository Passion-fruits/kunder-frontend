import { FC } from "react";
import { PlayIcon } from "../../assets";
import * as S from "./styles";

interface Props {
  currentShow: boolean;
  setCurrentIndex(params: number): void;
  index: number;
}

const ShowMusicCard: FC<Props> = ({ currentShow, setCurrentIndex, index }) => {
  return (
    <S.CardWrap
      currentShow={currentShow}
      onClick={() => setCurrentIndex(index)}
      style={currentShow ? {} : { cursor: "pointer" }}
    >
      <S.CoverWrap currentShow={currentShow}>
        <button>
          <PlayIcon size={23} />
        </button>
        <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" />
      </S.CoverWrap>
      <h1 className="music-title text-overflow">Blinding lights</h1>
      <h3 className="artist text-overflow">The weekend</h3>
    </S.CardWrap>
  );
};

export default ShowMusicCard;
