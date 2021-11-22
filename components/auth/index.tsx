import { FC } from "react";
import * as S from "./styles";

interface Props {}

const Auth: FC<Props> = () => {
  return (
    <S.Wrapper>
      <div className="line" />
      <h1 className="title">
        한국 #1 인디음악 서비스 <br />
        쿤더
      </h1>
      <p className="description">로그인 후 더 많은 서비스를 즐겨보세요</p>
      <S.ButtonWrap>
        <button>로그인/가입</button>
        <button>서비스 소개</button>
      </S.ButtonWrap>
    </S.Wrapper>
  );
};

export default Auth;
