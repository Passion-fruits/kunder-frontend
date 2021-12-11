import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import { ColorMap } from "../../../../styles/color";
import { toast } from "material-react-toastify";
import kdtApi from "../../../../lib/api/kdt";
import { MyKdt } from "./../../../../lib/interface/kdt";
import { getContextValue, setContextValue } from "../../../../lib/context";

const Support: FC = () => {
  const kdtRef = useRef(null);
  const commentRef = useRef(null);
  const [myKdt, setMyKdt] = useState(0);
  const [loading, setLoading] = useState(false);
  const artist_id = getContextValue().user_id;
  const dispatch = setContextValue();

  const submit = () => {
    const kdt = kdtRef.current.value;
    const comment = commentRef.current.value;
    if (kdt < 10) {
      toast.info("🙌 10개부터 후원 가능합니다!");
      return;
    }
    if (kdt > myKdt) {
      toast.info("😢 보유량이 부족합니다");
      return;
    }
    if (!comment) {
      toast.info("😢 질문을 작성해주세요");
    }
    toast.info("정상 처리중입니다");
    setLoading(true);
    kdtApi
      .supportToArtist({
        user_id: artist_id,
        kdt: kdt,
        comment: comment,
      })
      .then((res) => {
        toast.success("✨ 후원이 완료되었습니다!");
        toast.success("후원내역에서 확인할 수 있습니다");
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
      });
  };

  useEffect(() => {
    kdtApi.getMyKdt().then((res) => {
      const data: MyKdt = res.data;
      setMyKdt(parseInt(data.total_kdt) / Math.pow(10, 18));
    });
  }, []);

  return (
    <Wrapper>
      <h1>후원하기</h1>
      <p>후원 후 아티스트와 소통하세요!</p>
      <span className="my-coin-count">
        보유 별풍선 <b>{myKdt}</b>개
      </span>
      <input type="number" ref={kdtRef} defaultValue={0} />
      <textarea placeholder="남길 말을 입력하세요!" ref={commentRef} />
      <button onClick={loading ? undefined : submit}>후원하기</button>
    </Wrapper>
  );
};

export default Support;

export const Wrapper = styled.div`
  width: 500px;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: ${ColorMap.grey800};
  & h1 {
    font-size: 25px;
    color: ${ColorMap.grey000};
  }
  & p {
    font-size: 17px;
    color: ${ColorMap.grey200};
    margin-top: 5px;
    margin-bottom: 20px;
  }
  & .support-price-title {
    font-size: 18px;
    font-weight: 500;
    color: ${ColorMap.grey000};
    margin-top: 25px;
    display: flex;
    align-items: center;
    & strong {
      font-size: 15px;
      font-weight: 400;
      color: ${ColorMap.green100};
      margin-left: 10px;
    }
  }
  & input[type="number"],
  textarea {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    background-color: ${ColorMap.grey900};
    color: ${ColorMap.grey000};
    margin-top: 15px;
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
  }
  & textarea {
    height: 150px;
    font-size: 17px;
    font-weight: 400;
    padding-top: 10px;
    &::placeholder {
      color: ${ColorMap.grey200};
    }
  }
  & .my-coin-count {
    font-size: 17px;
    color: ${ColorMap.grey000};
    & b {
      color: ${ColorMap.mainColor};
    }
  }
  & button {
    width: 100%;
    height: 50px;
    color: ${ColorMap.grey000};
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
    background-color: ${ColorMap.mainColor};
    border-radius: 5px;
  }
`;
