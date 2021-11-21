import { FC } from "react";
import MenuTab from "./MenuTab";
import * as S from "./styles";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <MenuTab />
        <h1 className="logo">KUNDER</h1>
        <img
          className="profile"
          src="https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1596824693321-GTM9D9J5ID9OK2LVQV33/Fine+Line"
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
