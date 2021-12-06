import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Card from "./Card";
import kdt from "../../lib/api/kdt";
import { KdtCard, MyKdt } from "./../../lib/interface/kdt";

interface Props {}

const MyWallet: FC<Props> = () => {
  const coin = "별풍선";
  const [myKdt, setMyKdt] = useState<MyKdt>();
  const coinCardArr: KdtCard[] = [
    {
      coinCnt: 10,
      price: 1000,
    },
    {
      coinCnt: 30,
      price: 3000,
    },
    {
      coinCnt: 50,
      price: 5000,
    },
    {
      coinCnt: 100,
      price: 10000,
    },
    {
      coinCnt: 200,
      price: 20000,
    },
    {
      coinCnt: 500,
      price: 50000,
    },
  ];

  useEffect(() => {
    kdt.getMyKdt().then((res) => {
      setMyKdt(res.data);
    });
  }, []);
  return (
    <S.Wrapper>
      <S.Top>
        <S.Title>
          보유 {coin}{" "}
          {myKdt && (
            <>
              <span className="highlight">
                {parseInt(myKdt.total_kdt) / Math.pow(10, 18)}
              </span>
              개
            </>
          )}
        </S.Title>
        <S.Explain>
          {coin}을 충전하여 <span className="gHighlight">아티스트를 후원</span>
          해보세요! 후원하면 <span className="gHighlight">아티스트의 답장</span>
          을 받을 수 있습니다.
        </S.Explain>
        <S.TopBtn>
          <button>거래내역 보기</button>
          <button>후원내역 보기</button>
        </S.TopBtn>
      </S.Top>
      <hr className="line" />
      <S.CardList>
        {coinCardArr.map((obj, index) => (
          <Card coin={coin} coinNum={obj.coinCnt} cost={obj.price} />
        ))}
      </S.CardList>
      <hr className="line" />
      <S.Bottom>
        <ul className="coinExp">
          <li>
            별풍선 후원 후 아티스트의 답장이 오지 않으면{" "}
            <span className="gHighlight">후원을 취소</span>할 수 있습니다.
          </li>
          <li>
            아티스트의 답장은 <span className="gHighlight">후원내역</span>에서
            확인하실 수 있습니다.
          </li>
          <li>답장을 받은 이후 후원은 취소 불가합니다.</li>
        </ul>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default MyWallet;
