import { FC } from "react";
import * as S from "./styles";
import { setContextValue } from "./../../lib/context/index";
import SlideCardList from "../common/SlideMusicCardList";

interface Props {}

const Auth: FC<Props> = () => {
  const dispatch = setContextValue();
  const openLoginModal = () => {
    dispatch({ type: "SET_MODAL", modal: "login" });
  };
  return (
    <S.Wrapper>
      <div className="line" />
      <h1 className="introduce">
        한국 #1 인디음악 서비스 <br />
        쿤더
      </h1>
      <p className="description">로그인 후 더 많은 서비스를 즐겨보세요</p>
      <S.ButtonWrap>
        <button onClick={openLoginModal}>로그인/가입</button>
        <button>서비스 소개</button>
      </S.ButtonWrap>
      <SlideCardList />
    </S.Wrapper>
  );
};

export default Auth;
