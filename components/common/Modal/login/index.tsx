import { FC } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "../../../../styles/color";
import { setContextValue } from "../../../../lib/context/index";
import GoogleLogin from "react-google-login";
import { toast } from "material-react-toastify";
import auth from "../../../../lib/api/auth";
import { useRouter } from "next/dist/client/router";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "../../../../lib/api/export";

interface Props {}

const Login: FC<Props> = () => {
  const dispatch = setContextValue();
  const router = useRouter();

  const changeModalToSignup = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "signUp",
    });
  };

  const googleAuthEvent = (event) => {
    const token = event.tokenId;
    toast.info("π μ μ μ²λ¦¬μ€μλλ€.");
    auth.googleLogin(token).then((res) => {
      const data = res.data;
      if (!data.isFresh) {
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(USER_ID, data.user_id);
        toast.success("π λ‘κ·ΈμΈμ νμν©λλ€!");
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
        router.push("/");
        return;
      } else {
        dispatch({
          type: "SET_MODAL",
          modal: "signUp",
        });
      }
    });
  };

  return (
    <Wrapper>
      <h1>λ‘κ·ΈμΈ/κ°μ</h1>
      <p>μΏ€λμ μ€μ  κ²μ νμν©λλ€!</p>
      <ButtonWrap>
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          cookiePolicy="single_host_origin"
          render={(res) => (
            <button onClick={res.onClick} className="google">
              Google λ‘κ·ΈμΈ
            </button>
          )}
          onSuccess={googleAuthEvent}
          onFailure={() => toast.error("π’ μ λ³΄λ₯Ό λΆλ¬μ€λλ° μ€ν¨νμμ΅λλ€.")}
        />
        <button className="facebook">Facebook λ‘κ·ΈμΈ</button>
        <button className="kakao">Kakao λ‘κ·ΈμΈ</button>
      </ButtonWrap>
      <span onClick={changeModalToSignup}>κ°μΈμ λ³΄ μ΄μ© μ½κ΄</span>
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
