import { FC, useRef, useState } from "react";
import * as S from "./styles";
import { SupportCardType } from "./../../../lib/interface/kdt";
import kdt from "../../../lib/api/kdt";
import { AxiosError } from "axios";
import { toast } from "material-react-toastify";

const KdtCntMent = ({ complete, kdt_cnt, question }) => {
  return (
    <S.FlexWrap>
      <div>
        <p className="kdt-infor">
          <b>{kdt_cnt}개</b>의 별풍선을 후원하였습니다
        </p>
        <p className="question">{question}</p>
      </div>
      {!complete && <button>후원 취소</button>}
    </S.FlexWrap>
  );
};

const Profile = ({
  isArtist,
  complete = true,
  cover_url,
  name,
  kdt_cnt = 0,
  answer = "",
}) => {
  return (
    <S.ProfileWrap>
      <img src={cover_url} />
      <div>
        <span className="profile-intro">
          {isArtist ? (
            <>
              <b className="name">{name}</b>님의 답장
            </>
          ) : (
            <>
              <b className="name">{name}</b>님이{" "}
              <b className="kdt">{kdt_cnt}KDT</b>를 후원하셨습니다!
            </>
          )}
        </span>
        {complete ? (
          <p className="profile-contents">{answer}</p>
        ) : (
          <p className="un-answer">아직 답장이 오지 않았습니다</p>
        )}
      </div>
    </S.ProfileWrap>
  );
};

const MyAnswer = ({ answer }) => {
  return (
    <S.MyAnswerWrap>
      <span className="title">나의 답장</span>
      <p className="answer">{answer}</p>
    </S.MyAnswerWrap>
  );
};

interface Props {
  type: number;
  data: SupportCardType[];
}

const SupportCard: FC<Props> = ({ type, data }) => {
  const [loading, setLoading] = useState(false);
  type FuncProps = {
    event: any;
    obj: SupportCardType;
    index: number;
  };

  const answerForSupport = ({ event, obj, index }: FuncProps) => {
    if (event.keyCode === 13) {
      if (loading) return;
      toast.info("🙌 정상 처리중입니다");
      setLoading(true);
      kdt
        .answerForSupport({
          msg_id: obj.message_id,
          answer: event.target.value,
          donate_user_id: obj.user_id,
        })
        .then((res) => {
          toast.success(`😊 ${obj.amount}kdt를 받았습니다!`);
          data.slice(index, 1);
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          if (err.response.status === 400) {
            toast.error("😢 답장을 입력해주세요");
          }
          setLoading(false);
        });
    }
  };
  return (
    <S.CardListWrapper>
      {data.map((obj, index) => (
        <S.Wrapper key={index}>
          {type === 1 ? (
            <>
              <KdtCntMent
                complete={false}
                kdt_cnt={obj.amount}
                question={obj.question}
              />
              <Profile
                isArtist={true}
                complete={false}
                name={obj.artist}
                cover_url={obj.artist_profile}
              />
            </>
          ) : type === 2 ? (
            <>
              <KdtCntMent
                complete={true}
                kdt_cnt={obj.amount}
                question={obj.question}
              />
              <Profile
                isArtist={true}
                name={obj.artist}
                cover_url={obj.artist_profile}
                answer={obj.answer}
              />
            </>
          ) : type === 3 ? (
            <>
              <Profile
                isArtist={false}
                cover_url={obj.profile}
                name={obj.name}
                kdt_cnt={obj.amount}
              />
              <S.AnswerInput
                placeholder="답장을 입력하고 별풍선을 받아가세요!"
                onKeyDown={(event) =>
                  answerForSupport({ event: event, obj: obj, index: index })
                }
              />
            </>
          ) : (
            <>
              <Profile
                isArtist={false}
                cover_url={obj.profile}
                name={obj.name}
                kdt_cnt={obj.amount}
              />
              <MyAnswer answer={obj.answer} />
            </>
          )}
        </S.Wrapper>
      ))}
    </S.CardListWrapper>
  );
};

export default SupportCard;
