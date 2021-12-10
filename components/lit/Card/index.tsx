import { FC } from "react";
import * as S from "./styles";
import { CommentIcon, HeartIcon } from "../../../assets";
import LoadImage from "./../../common/LoadImage/index";

interface Props {}

const Card: FC<Props> = () => {
  return (
    <S.Card>
      <S.CardTop>
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
      <S.TagWrap>
        <div># 힙합음악</div>
        <div># 힙합음악</div>
        <div># 힙합음악</div>
      </S.TagWrap>
    </S.Card>
  );
};

export default Card;
