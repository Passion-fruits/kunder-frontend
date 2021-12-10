import { FC } from "react";
import * as S from "./styles";
import { CommentIcon, HeartIcon } from "../../../assets";
import LoadImage from "./../../common/LoadImage/index";

interface Props {
  index: number;
  currentIndex: number;
  setCurrentIndex(any): void;
}

const Card: FC<Props> = ({ index, currentIndex, setCurrentIndex }) => {
  const isMine = index === currentIndex;
  return (
    <S.Card
      style={isMine ? {} : { opacity: "0.5", cursor: "pointer" }}
      onClick={() => setCurrentIndex(index)}
    >
      <S.CardTop style={isMine ? { width: "420px" } : { width: "300px" }}>
        <LoadImage
          border_radius="basic"
          src="https://i.pinimg.com/originals/10/6c/8e/106c8e4a30c0b84aa3c5296db8b0a4d0.jpg"
          className="lit-cover-img"
        />
        <S.LPWrapper>
          <LoadImage
            border_radius="circle"
            src="https://i.pinimg.com/originals/10/6c/8e/106c8e4a30c0b84aa3c5296db8b0a4d0.jpg"
          />
        </S.LPWrapper>
      </S.CardTop>
      <h1 className="card-title">Still Dre</h1>
      <h3 className="card-artist">dr dre</h3>
      <S.ButtonWrap>
        <button>
          <CommentIcon size={20} />
          10
        </button>
        <button>
          <HeartIcon size={20} color="#fff" />
          10
        </button>
      </S.ButtonWrap>
      <S.TagWrap style={isMine ? { opacity: 1 } : { opacity: 0 }}>
        <div># 힙합음악</div>
        <div># 힙합음악</div>
        <div># 힙합음악</div>
      </S.TagWrap>
    </S.Card>
  );
};

export default Card;
