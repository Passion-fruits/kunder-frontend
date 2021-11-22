import { FC } from "react";
import Menu from "./Menu";
import * as S from "./styles";

interface Props {}

const MenuTab: FC<Props> = () => {
  return (
    <S.MenuWrapper>
      <Menu content="홈" path="/" />
      <Menu content="LIT" path="/lit" />
      <Menu content="쿤더차트" path="/chart" />
      <Menu content="검색" path="/search" />
    </S.MenuWrapper>
  );
};

export default MenuTab;
