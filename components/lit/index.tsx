import { FC } from "react";
import PageDiscription from "./PageDescription";
import * as S from "./styles";
import HeartIcon from "./../../assets/Heart";
import { CommentIcon } from "../../assets";
import LoadImage from "./../common/LoadImage/index";
import BackgroundShaddow from "./BackgroundShaddow";
import Card from "./Card";

interface Props {}

const Lit: FC<Props> = () => {
  return (
    <S.Wrapper>
      <BackgroundShaddow color="pink" />
      <PageDiscription />
      <S.CardListWrapper>
        <Card />
      </S.CardListWrapper>
    </S.Wrapper>
  );
};

export default Lit;
