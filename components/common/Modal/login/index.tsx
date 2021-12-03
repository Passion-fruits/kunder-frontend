import { FC } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";
import { setContextValue } from "../../../../lib/context/index";

interface Props {}

const Login: FC<Props> = () => {
  const dispatch = setContextValue();
  const changeModalToSignup = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "signUp",
    });
  };
  return (
    <Wrapper>
      <h1>로그인/가입</h1>
      <p>쿤더에 오신 것을 환영합니다!</p>
      <ButtonWrap>
        <button className="google">Google 로그인</button>
        <button className="facebook">Facebook 로그인</button>
        <button className="kakao">Kakao 로그인</button>
      </ButtonWrap>
      <span onClick={changeModalToSignup}>개인정보 이용 약관</span>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${ColorMap.grey800};
  padding: 70px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  & h1 {
    font-size: 25px;
    color: ${ColorMap.grey000};
  }
  & p {
    font-size: 18px;
    color: ${ColorMap.grey300};
    margin-top: 5px;
  }
  & span {
    font-size: 16px;
    color: ${ColorMap.grey200};
    margin-top: 40px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & button {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
  }
  & .google {
    color: ${ColorMap.grey800};
    background-color: ${ColorMap.grey000};
  }
  & .facebook {
    color: ${ColorMap.grey000};
    background-color: ${ColorMap.blue200};
  }
  & .kakao {
    color: #5d0000;
    background-color: #ffc43a;
  }
`;
