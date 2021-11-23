import {FC} from "react";
import * as S from "./styles";

interface CoinProps {
    coinNum: number;
    cost: number;
    coin: string;
}

const Card: FC<CoinProps> = ({coin = "별풍선", coinNum, cost}) => {
    return(
        <S.Container>
            <S.Coin>{coin} <span className="gHighlight">{coinNum}</span>개</S.Coin>
            <S.Cost> <span className="costSpan">가격</span> <p className="won">{cost}원</p></S.Cost>
            <S.Purchase>구매하기</S.Purchase>
        </S.Container>
    )
}

export default Card;