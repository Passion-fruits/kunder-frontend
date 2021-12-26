import { FC } from "react";
import Menu from "./Menu";
import * as S from "./styles";

interface Props {}

const MenuTab: FC<Props> = () => {
  return (
    <S.MenuWrapper>
      <Menu content="홈" path="/" />
      <Menu content="LIT" path="/lit" />
      <Menu content="기록" path="/me/history" />
      <Menu content="검색" path="/search" />
    </S.MenuWrapper>
  );
};

export default MenuTab;
