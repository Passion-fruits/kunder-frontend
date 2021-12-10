import { FC } from "react";
import PageDiscription from "./PageDescription";
import * as S from "./styles";
import HeartIcon from "./../../assets/Heart";
import { CommentIcon } from "../../assets";

interface Props {}

const Lit: FC<Props> = () => {
  return (
    <S.Wrapper>
      <PageDiscription />
      <S.CardListWrapper>
        <S.Card>
          <S.CardTop>
            <img
              src="https://i.pinimg.com/originals/10/6c/8e/106c8e4a30c0b84aa3c5296db8b0a4d0.jpg"
              className="lit-cover-img"
            />
            <S.LPWrapper>
              <img src="https://i.pinimg.com/originals/10/6c/8e/106c8e4a30c0b84aa3c5296db8b0a4d0.jpg" />
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
      </S.CardListWrapper>
    </S.Wrapper>
  );
};

export default Lit;
