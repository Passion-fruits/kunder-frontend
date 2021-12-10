import { FC, useState } from "react";
import PageDiscription from "./PageDescription";
import * as S from "./styles";
import BackgroundShaddow from "./BackgroundShaddow";
import Card from "./Card";

interface Props {}

const Lit: FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <S.Wrapper>
      <BackgroundShaddow color="pink" />
      <PageDiscription />
      <S.FlexWrap>
        <S.CardListWrapper index={currentIndex}>
          {[1, 2, 3, 4, 5, 6, 7].map((obj, index) => (
            <Card
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          ))}
        </S.CardListWrapper>
      </S.FlexWrap>
    </S.Wrapper>
  );
};

export default Lit;
