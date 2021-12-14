import styled from "@emotion/styled";
import { FC, useRef, useState } from "react";
import { ColorMap } from "../../../../styles/color";
import { genreList } from "./../../../../lib/list/genre";
import { toast } from "material-react-toastify";
import auth from "../../../../lib/api/auth";
import { useRouter } from "next/dist/client/router";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../../../lib/api/export";
import { setContextValue } from "../../../../lib/context";

const Signup: FC = () => {
  const nameRef = useRef(null);
  const genreRef = useRef(null);
  const [isCheck, setIsCheck] = useState(false);
  const router = useRouter();
  const dispatch = setContextValue();

  const submit = () => {
    const name = nameRef.current.value;
    const genre = genreRef.current.value;
    if (!isCheck) {
      toast.info("약관에 동의해주세요");
      return;
    }
    if (!name) {
      toast.info("이름을 입력해주세요");
      return;
    }
    auth
      .signup({
        name: name,
        userGenre: [genre],
        image_path:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgmQ7X0AgXyJW3M8-w0hyMuiLRrBCbQ9nnN7V4Bc0Y_iZog1BXQummOcQAHC2fPsgu4A&usqp=CAU",
        email: "jidole01@gmail.com",
      })
      .then((res) => {
        const { access_token, refresh_token, user_id } = res.data;
        router.push("/");
        toast.success("✨ 가입을 환영합니다!");
        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);
        localStorage.setItem(USER_ID, user_id);
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
      });
  };

  return (
    <Wrapper>
      <h1>회원가입</h1>
      <p>가입 후 더많은 활동을 즐겨보세요!</p>
      <SelectWrapper>
        <h3>사용자명</h3>
        <input placeholder="사용할 이름을 입력하세요!" ref={nameRef} />
      </SelectWrapper>
      <SelectWrapper>
        <h3>어떤 장르 좋아하세요?</h3>
        <select ref={genreRef}>
          {genreList.map((genre, index) => (
            <option value={index + 1}>{genre}</option>
          ))}
        </select>
      </SelectWrapper>
      <CheckBoxWrap>
        <input
          type="checkbox"
          id="service_check"
          onClick={() => setIsCheck(!isCheck)}
        />
        <label htmlFor="service_check">
          <span
            onClick={() =>
              window.open("https://github.com/Passion-fruits/privacy-policy")
            }
          >
            서비스 이용 약관
          </span>
          에 동의합니다.
        </label>
      </CheckBoxWrap>
      <button onClick={submit}>가입하기</button>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 500px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    color: ${ColorMap.grey000};
    font-size: 25px;
  }
  & p {
    color: ${ColorMap.grey300};
    font-size: 17px;
    margin-top: 5px;
  }
  & button {
    width: 100%;
    height: 50px;
    color: ${ColorMap.grey000};
    font-size: 19px;
    font-weight: bold;
    background-color: ${ColorMap.mainColor};
    border-radius: 5px;
    margin-top: 20px;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  & h3 {
    color: ${ColorMap.grey000};
    font-size: 17px;
  }
  & input,
  select {
    color: ${ColorMap.grey000};
    background-color: ${ColorMap.grey900};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 0 17px;
    font-size: 17px;
  }
  & input {
    &::placeholder {
      color: ${ColorMap.grey300};
    }
  }
`;

const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
  & label {
    color: ${ColorMap.grey300};
    font-size: 15px;
    & span {
      color: ${ColorMap.grey200};
      text-decoration: underline;
      cursor: pointer;
    }
  }
  & input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }
`;
