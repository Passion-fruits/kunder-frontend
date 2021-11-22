import { FC, useEffect, useState } from "react";
import MenuTab from "./MenuTab";
import * as S from "./styles";

interface Props {}

const Header: FC<Props> = () => {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    });
  }, []);

  return (
    <S.Wrapper
      style={
        isScrollTop
          ? { backgroundColor: "rgb(0,0,0,0)" }
          : { backgroundColor: "rgb(0,0,0,0.8)" }
      }
    >
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
