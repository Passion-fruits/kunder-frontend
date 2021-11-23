import { FC } from "react";
import * as S from "./styles";
import Card from "./Card";

interface Props {
  coin: string;
  coinCnt: number;
}

const MyWallet: FC<Props> = ({coin = "별풍선",coinCnt = 60 }) => {
  
  return(
    <S.Wrapper>
      <S.Top>
      <S.Title>보유 {coin} <span className="highlight">{coinCnt}</span>개</S.Title>
      <span className="explain">
        {coin}을 충전하여 <span className="gHighlight">아티스트를 후원</span>해보세요!
        후원하면 <span className="gHighlight">아티스트의 답장</span>을 받을 수 있습니다.
      </span>
      <S.TopBtn>
        <S.DealHistory>거래내역 보기</S.DealHistory>
        <S.DonateHistory>후원내역 보기</S.DonateHistory>
      </S.TopBtn>
      </S.Top>
      <hr className="line" />
      <S.Main>
        <Card coin={coin} coinNum={10} cost={1000} />
        <Card coin={coin} coinNum={50} cost={6000} />
        <Card coin={coin} coinNum={100} cost={12000} />
        <Card coin={coin} coinNum={500} cost={60000} />
        <Card coin={coin} coinNum={1000} cost={120000} />
        <Card coin={coin} coinNum={2000} cost={240000} />
      </S.Main>
      <hr className="line" />
      <S.Bottom>
        <ul className="coinExp">
          <li>별풍선 후원 후 아티스트의 답장이 오지 않으면 <span className="gHighlight">후원을 취소</span>할 수 있습니다.</li>
          <li>아티스트의 답장은 <span className="gHighlight">후원내역</span>에서 확인하실 수 있습니다.</li>
          <li>답장을 받은 이후 후원은 취소 불가합니다.</li>
        </ul>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default MyWallet;
