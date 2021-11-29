import { FC } from "react";
import * as S from "./styles";

interface Props {}

const KdtCntMent = ({ complete }) => {
  return (
    <S.FlexWrap>
      <div>
        <p>
          <b>10개</b>의 별풍선을 후원하였습니다
          <span className="date">3일 전</span>
        </p>
      </div>
      {!complete && <button>후원 취소</button>}
    </S.FlexWrap>
  );
};

const Profile = ({ isArtist, complete = true }) => {
  return (
    <S.ProfileWrap>
      <img src="https://i.guim.co.uk/img/media/25ba79983d414405579567ebde7176600681ff81/0_466_2590_1553/master/2590.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=26221ae9b213bccadebbe491442b7e04" />
      <div>
        <span className="profile-intro">
          {isArtist ? (
            <>
              <b className="name">김팔복</b>님의 답장
            </>
          ) : (
            <>
              <b className="name">김팔복</b>님이 <b className="kdt">10KDT</b>를
              후원하셨습니다!
            </>
          )}
        </span>
        {complete ? (
          <p className="profile-contents">하이고 이런 과분한 관심을...ㅎㅎㅎ</p>
        ) : (
          <p className="un-answer">아직 답장이 오지 않았습니다</p>
        )}
      </div>
    </S.ProfileWrap>
  );
};

const MyAnswer = () => {
  return (
    <S.MyAnswerWrap>
      <span className="title">나의 답장</span>
      <p className="answer">아이 감사합니다 행님 군대 잘다녀오세용~~</p>
    </S.MyAnswerWrap>
  );
};

const SupportCard: FC<Props> = () => {
  return (
    <S.CardListWrapper>
      <S.Wrapper>
        <KdtCntMent complete={false} />
        <Profile isArtist={true} complete={false} />
      </S.Wrapper>
      <S.Wrapper>
        <KdtCntMent complete={true} />
        <Profile isArtist={true} />
      </S.Wrapper>
      <S.Wrapper>
        <Profile isArtist={false} />
        <S.AnswerInput placeholder="답장을 입력하고 별풍선을 받아가세요!" />
      </S.Wrapper>
      <S.Wrapper>
        <Profile isArtist={false} />
        <MyAnswer />
      </S.Wrapper>
    </S.CardListWrapper>
  );
};

export default SupportCard;
