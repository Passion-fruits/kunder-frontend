import { FC } from "react";
import * as S from "./styles";

interface Props {}

const PageDiscription: FC<Props> = () => {
  return (
    <S.PageDescription>
      <h1>LIT</h1>
      <span>
        : 음악의 <b>하이라이트 부분</b>만 만나보세요!
      </span>
    </S.PageDescription>
  );
};

export default PageDiscription;
