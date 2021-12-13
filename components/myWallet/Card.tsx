import { FC } from "react";
import * as S from "./styles";
import { loadTossPayments } from "@tosspayments/sdk";
import { v4 as uuidv4 } from "uuid";

interface CoinProps {
  coinNum: number;
  cost: number;
  coin: string;
}

const Card: FC<CoinProps> = ({ coin, coinNum, cost }) => {
  const clientKey = "test_ck_mnRQoOaPz8L7bZe1MJvry47BMw6v";
  const tossPayments = loadTossPayments(clientKey);

  const chargeToken = () => {
    tossPayments.then((res) => {
      res.requestPayment("가상계좌", {
        amount: cost,
        orderId: uuidv4(),
        orderName: `KDT ${coinNum}개 충전`,
        customerName: "후원자님",
        successUrl: window.location.origin + "/me/load",
        failUrl: window.location.origin + "/me/wallet",
      });
    });
  };

  return (
    <S.CardWrapper>
      <S.Coin>
        {coin} <span className="gHighlight">{coinNum}</span>개
      </S.Coin>
      <S.Cost>
        <span className="costSpan">가격</span> <p className="won">{cost}원</p>
      </S.Cost>
      <S.Purchase onClick={chargeToken}>구매하기</S.Purchase>
    </S.CardWrapper>
  );
};

export default Card;
